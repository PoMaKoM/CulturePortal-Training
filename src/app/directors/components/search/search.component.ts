import { Component, OnInit } from '@angular/core';
import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService) { }

  public ngOnInit(): void { }

  public searchFor(filteringValue: string): void {
    this.searchService.searchQueryUpdated(filteringValue);
  }
}
