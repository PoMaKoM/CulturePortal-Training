import { DialogFilmsListComponent } from './../../components/dialog-films-list/dialog-films-list.component';
import { FilmsDirector } from './../../../shared/models/films-director.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from './../../../core/services/get-data.service';
import { switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public infoDirector: InfoDirector;
  public src: string = '';
  public name: string = '';
  public description: string = '';
  public films: FilmsDirector[];
  public videoSrc: string;
  public videoTitle: string = '';

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

  public director: Subject<InfoDirector> = new Subject();

  public ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.getDataService.getDirectorById(params.id)))
      .subscribe((infoDirector: InfoDirector) => {
        this.infoDirector = infoDirector;
        this.films = this.infoDirector.en.films;
        this.name = this.infoDirector.en.name;
        this.src = this.infoDirector.avatar;
        this.description = this.infoDirector.en.description;
        this.videoSrc = this.infoDirector.en.video.link;
        this.director.next(infoDirector);
      });
  }
}
