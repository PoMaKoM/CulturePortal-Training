import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogFilmsListComponent } from './../../components/dialog-films-list/dialog-films-list.component';
import { GetDataService } from './../../../core/services/get-data.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { FilmsDirector } from './../../../shared/models/films-director.model';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    expand
  ]
})
export class DetailsComponent implements OnInit {

  public infoDirector: InfoDirector;
  public films: FilmsDirector[];

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

  public ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.getDataService.getDirectorById(params.id)))
      .subscribe((infoDirector: InfoDirector) => {
        this.infoDirector = infoDirector;
      });
  }
}
