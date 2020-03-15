import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogFilmsListComponent } from './../../components/dialog-films-list/dialog-films-list.component';
import { DialogVideoComponent } from './../../components/dialog-video/dialog-video.component';
import { Video } from './../../../shared/models/details-info-director.model';
import { Localize } from './../../../shared/models/localize.model';
import { GetDataService } from './../../../core/services/get-data.service';
import { BehaviorSubject, Subject } from 'rxjs';
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
export class DetailsComponent implements OnInit, OnDestroy {
  private componentDestroyed: Subject<boolean> = new Subject();
  public infoDirector: InfoDirector;
  public films: FilmsDirector[];
  public video: Video;
  public translations: Localize;

  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    public dialog: MatDialog
  ) {}

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
    this.getDataService.getData().subscribe((translations: Localize) => (this.translations = translations));
    this.route.params
      .pipe(switchMap((params) => this.getDataService.getDirectorById(params.id)))
      .subscribe((infoDirector: InfoDirector) => {
        this.infoDirector = infoDirector;
      });
  }
  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}
