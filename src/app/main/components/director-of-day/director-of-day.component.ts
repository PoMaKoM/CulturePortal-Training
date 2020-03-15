import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Localize } from 'src/app/shared/models/localize.model';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss']
})
export class DirectorOfDayComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public infoDirector: InfoDirector;
  public id: string;
  public translations: Localize;

  constructor(private getDataService: GetDataService) { }

  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }

  public ngOnInit(): void {
    const date: Date = new Date();
    const index: number = date.getDay();
    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });
    this.getDataService.getDataDirectors().subscribe((directors: InfoDirector[]) => {
      this.infoDirector = directors[index];
      this.id = this.infoDirector.id;
    });
  }

  public ngOnDestroy(): void {
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}
