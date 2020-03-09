import { Component, OnInit } from '@angular/core';
import { SearchService } from './../../services/search.service';
import { GetDataService } from './../../../core/services/get-data.service';

@Component({
  selector: 'app-directors-list',
  templateUrl: './directors-list.component.html',
  styleUrls: ['./directors-list.component.scss']
})
export class DirectorsListComponent implements OnInit {
  constructor(private getDataService: GetDataService, searchService: SearchService) { }

  public ngOnInit(): void { }
}
