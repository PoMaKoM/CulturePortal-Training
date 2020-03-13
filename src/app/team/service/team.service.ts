import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl: string = 'assets/team.json';
  constructor(private http: HttpClient) {}
  public getData(): Observable<Team> {
    return this.http.get<Team>(this.teamUrl);
  }

  public getAvatar(): string {
    return 'https://avatars2.githubusercontent.com/u/83907?v=4';
  }
}
