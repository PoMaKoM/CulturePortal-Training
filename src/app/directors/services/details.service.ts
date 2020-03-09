import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InfoDirector } from './../models/directors';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  public directorData: Subject<InfoDirector> = new Subject();
  constructor() { }
}
