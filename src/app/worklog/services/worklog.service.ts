import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPerson } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<unknown> {
    return this.http.get('assets/worklog.json');
  }
}
