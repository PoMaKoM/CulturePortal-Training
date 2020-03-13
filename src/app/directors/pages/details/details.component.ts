import { Video } from './../../../shared/models/details-info-director.model';
import { DialogVideoComponent } from './../../components/dialog-video/dialog-video.component';
import { DialogFilmsListComponent } from './../../components/dialog-films-list/dialog-films-list.component';
import { FilmsDirector } from './../../../shared/models/films-director.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from './../../../core/services/get-data.service';
import { switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [expand]
})
export class DetailsComponent implements OnInit {
  public infoDirector: InfoDirector;
  public src: string = '';
  public name: string = '';
  public description: string = '';
  public films: FilmsDirector[];
  public video: Video;
  public title: string = '';

  public director: Subject<InfoDirector> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    public dialog: MatDialog
  ) {}

  public openDialog(): void {
    this.dialog.open(DialogFilmsListComponent, {
      width: '500px',
      data: this.films
    });
  }

  public openVideoDialog(): void {
    this.dialog.open(DialogVideoComponent, {
      width: '100%',
      data: this.video
    });
  }

  public ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.getDataService.getDirectorById(params.id)))
      .subscribe((infoDirector: InfoDirector) => {
        this.infoDirector = infoDirector;
        this.films = this.infoDirector.en.films;
        this.name = this.infoDirector.en.name;
        this.src = this.infoDirector.avatar;
        this.description = this.infoDirector.en.description;
        this.title = this.infoDirector.en.video.title;
        this.video = this.infoDirector.en.video;

        this.director.next(infoDirector);
      });
  }
}
