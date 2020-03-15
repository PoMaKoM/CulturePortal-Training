import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, EMPTY, from, Subject } from 'rxjs';
import { catchError, pluck, filter, switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { createClient, Entry, ContentfulClientApi } from 'contentful';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private client: ContentfulClientApi = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  private directorsUrl: string = 'assets/data-directors.json';
  private localizeUrl: string = 'assets/localize.json';
  private initLanguage: string = localStorage.getItem('language') || 'en';

  public currentLanguage: BehaviorSubject<string> = new BehaviorSubject(this.initLanguage);

  public language: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  public getData(value?: string): Observable<unknown> {
    return this.http.get(value ? value : this.localizeUrl);
  }
  public transferLanguageValue(lang: string): void {
    this.language.next(lang);
  }

  public getDataDirectors(): Observable<unknown> {
    return this.getData(this.directorsUrl).pipe(
      pluck('data'),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }

  public getDirectorById(id: string): Observable<unknown> {
    return this.getData(this.directorsUrl).pipe(
      pluck('data'),
      switchMap((directors: InfoDirector[]) => directors),
      filter((director: InfoDirector) => director.id === id),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }

  // tslint:disable-next-line: no-any
  public getDataFromCms({ query, contentType }: { query?: object; contentType: string; }): Observable<any> {
    return from(this.client.getEntries(Object.assign({
      content_type: contentType
    },                                               query))
      .then(res => res.items));
  }

  public getCurrentLanguage(): string {
    return localStorage.getItem('language') || 'en';
  }
}
