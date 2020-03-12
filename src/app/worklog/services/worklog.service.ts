import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorklogService {

  private worklogUrl: string = 'assets/worklog.json';
  constructor(private http: HttpClient) { }

  public getData(): Observable<unknown> {
    return this.http.get(this.worklogUrl);
  }
}
