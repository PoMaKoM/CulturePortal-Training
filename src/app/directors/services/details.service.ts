import { Injectable } from '@angular/core';
import { DetailsInfoDirector } from './../models/details-info-director.model';
import { InfoDirector } from './../models/info-director.model';

@Injectable()
export class DetailsService {
  private _director: InfoDirector;
  private _detailsInfo: DetailsInfoDirector;
  get director(): InfoDirector {
    return this._director;
  }
  get detailsInfo(): DetailsInfoDirector {
    return this._detailsInfo;
  }
  set director(director: InfoDirector) {
    this._director = director;
  }
  set detailsInfo(detailsInfo: DetailsInfoDirector) {
    this._detailsInfo = detailsInfo;
  }

  constructor() { }
}
