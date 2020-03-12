import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { catchError, pluck, filter, switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private directorsUrl: string = 'assets/data-directors.json';
  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject('be');

  constructor(private http: HttpClient) { }

  public getData(): Observable<unknown> {
    return this.http.get(this.directorsUrl);
  }

  public getDataDirectors(): Observable<unknown> {
    return this.getData().pipe(
      pluck('data'),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }

  public getDirectorById(id: string): Observable<unknown> {
    return this.getData().pipe(
      pluck('data'),
      switchMap((directors: InfoDirector[]) => directors),
      filter((director: InfoDirector) => director.id === id),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }
}
