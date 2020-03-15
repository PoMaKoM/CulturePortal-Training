import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { GitHubResp } from '../models/githubResp.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl: string = 'assets/team.json';
  constructor(private http: HttpClient) {}
  public getData(): Observable<Team> {
    return this.http.get<Team>(this.teamUrl);
  }

  public async getAvatar(username: string): Promise<string> {
    let response: GitHubResp = await (await fetch(`https://api.github.com/users/${username}`)).json();
    return response.avatar_url;
  }
}
