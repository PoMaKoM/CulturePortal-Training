import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogFilmsListComponent } from './../../components/dialog-films-list/dialog-films-list.component';
import { DialogVideoComponent } from './../../components/dialog-video/dialog-video.component';
import { Video } from './../../../shared/models/details-info-director.model';
import { Localize } from './../../../shared/models/localize.model';
import { GetDataService } from './../../../core/services/get-data.service';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
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
  public infoDirector: InfoDirector;
  public films: FilmsDirector[];
  public video: Video;
  public translations: Localize;
  public id: string;

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

    this.getDataService.language.subscribe((lang: string) => {
      this.parseData(this.getDataService.getCurrentLanguage());
    });

    this.parseData(this.getDataService.getCurrentLanguage());
  }

  public parseData(lang: string): void {
    this.getDataService.getDataFromCms({
      query: null, contentType:
        `director${lang[0].toUpperCase() + lang.slice(1)}`
    }).subscribe((response) => {
      // tslint:disable-next-line: typedef
      const director = response.filter((result) => result.fields.id === this.route.snapshot.params.id)[0];
      this.infoDirector = {
        id: director.fields.id,
        avatar: director.fields.avatar,
        gallery: director.fields.gallery.gallery,
        be: director.fields.data,
        ru: director.fields.data,
        en: director.fields.data,
      };
    });
  }
  public ngOnDestroy(): void {}
}
