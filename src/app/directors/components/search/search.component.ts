import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public query: string;
  @Input() public placeholder: string;
  constructor(private searchService: SearchService) { }

  public ngOnInit(): void { }

  public searchFor(): void {
    this.searchService.searchQueryUpdated(this.query);
  }
}
