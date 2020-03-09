import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  public searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() { }

  public searchQueryUpdated(searchQuery: string): void {
    this.searchQuery.next(searchQuery);
  }

}
