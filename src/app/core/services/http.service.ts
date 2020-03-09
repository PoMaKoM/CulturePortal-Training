import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private directorsUrl = '/src/assets/data-directors.json'

  constructor(private http: HttpClient) { }

  getDataDirectors() {
    return this.http.get(this.directorsUrl);
  }
}
