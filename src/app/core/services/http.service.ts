import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Directors } from 'src/app/directors/models/directors.model';
import { Observable } from 'rxjs';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private directorsUrl: string = 'assets/data-directors.json';

  constructor(private http: HttpClient) {}

  public getDataDirectors(): Observable<unknown> {
    return this.http.get(this.directorsUrl);
  }
}
