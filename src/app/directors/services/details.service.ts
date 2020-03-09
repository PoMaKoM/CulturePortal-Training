import { Injectable } from '@angular/core';
import { InfoDirector } from './../models/directors';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private _director: InfoDirector;
  get director(): InfoDirector {
    return this._director;
  }
  set director(director: InfoDirector) {
    this._director = director;
  }

  constructor() { }
}
