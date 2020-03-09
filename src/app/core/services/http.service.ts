import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Directors } from 'src/app/directors/models/directors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private directorsUrl: string = './../../../assets/data-directors.json';

  constructor(private http: HttpClient) { }

  public getDataDirectors(): Observable<unknown> {
    return this.http.get(this.directorsUrl);
  }
}
