import { Injectable } from '@angular/core';
import { InfoDirector } from './../../directors/models/directors';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public currentData: InfoDirector[];
  public currentLanguage: string;

  constructor() { }
}
