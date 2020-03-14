import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from './../../services/search.service';
import { GetDataService } from './../../../core/services/get-data.service';
import { InfoDirector } from './../../../shared/models/info-director.model';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  styleUrls: ['./directors-list.component.scss'],
  animations: [
    flyInOut,
    expand
  ],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  }
})
export class DirectorsListComponent implements OnInit, OnDestroy {

  private componentDestroyed: Subject<boolean> = new Subject();
  public currentData: InfoDirector[];
  constructor(private getDataService: GetDataService, private searchService: SearchService) { }

  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }
  get searchQuery(): BehaviorSubject<string> {
    return this.searchService.searchQuery;
  }

  public ngOnInit(): void {
    this.getDataService.getDataDirectors().subscribe((currentData: InfoDirector[]) => {
      this.currentData = currentData;
    });
  }
  public ngOnDestroy(): void {
    this.searchQuery.next('');
    this.componentDestroyed.next(true);
    this.componentDestroyed.complete();
  }
}
