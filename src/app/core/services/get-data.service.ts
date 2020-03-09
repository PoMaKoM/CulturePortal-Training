import { Injectable } from '@angular/core';
import { InfoDirector } from './../../directors/models/directors';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public currentData: Subject<InfoDirector[]> = new Subject();
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject('be');

  // todo: obtain data from assets and pass to currentData;

  constructor() { }
}
