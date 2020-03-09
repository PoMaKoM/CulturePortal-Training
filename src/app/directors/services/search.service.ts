import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {

  public searchQuery: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  public searchQueryUpdated(searchQuery: string): void {
    this.searchQuery.next(searchQuery);
  }
}
