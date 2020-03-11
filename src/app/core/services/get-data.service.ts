import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { Directors } from 'src/app/shared/models/directors.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private directorsUrl: string = 'assets/data-directors.json';
  public currentData: Subject<InfoDirector[]> = new Subject();
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject('be');

  constructor(private http: HttpClient) { }

  public getDataDirectors(): Observable<unknown> {
    return this.http.get(this.directorsUrl).pipe(
      tap((result: Directors) => this.currentData.next(result.data)),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }
}
