import { BehaviorSubject, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SearchService } from './../../services/search.service';
import { GetDataService } from './../../../core/services/get-data.service';
import { InfoDirector } from './../../../shared/models/info-director.model';

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  styleUrls: ['./directors-list.component.scss']
})
export class DirectorsListComponent implements OnInit {

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
}
