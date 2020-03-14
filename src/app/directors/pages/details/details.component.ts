import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogFilmsListComponent } from './../../components/dialog-films-list/dialog-films-list.component';
import { DialogVideoComponent } from './../../components/dialog-video/dialog-video.component';
import { Video } from './../../../shared/models/details-info-director.model';
import { GetDataService } from './../../../core/services/get-data.service';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { FilmsDirector } from './../../../shared/models/films-director.model';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [expand]
})
export class DetailsComponent implements OnInit {

  public infoDirector: InfoDirector;
  public films: FilmsDirector[];
  public video: Video;

  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    public dialog: MatDialog
  ) { }

  public openDialog(films: FilmsDirector[]): void {
    this.dialog.open(DialogFilmsListComponent, {
      width: '500px',
      data: films
    });
  }

  public openVideoDialog(video: Video): void {
    this.dialog.open(DialogVideoComponent, {
      width: '100%',
      data: video
    });
  }

  public ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.getDataService.getDirectorById(params.id)))
      .subscribe((infoDirector: InfoDirector) => {
        this.infoDirector = infoDirector;
      });
  }
}
