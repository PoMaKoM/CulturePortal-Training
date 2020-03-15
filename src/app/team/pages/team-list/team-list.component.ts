import { BehaviorSubject } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Localize } from './../../../shared/models/localize.model';
import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { Member } from '../../models/member.model';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  animations: [flyInOut, expand],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;'
  }
})
export class TeamListComponent implements OnInit {
  public team: Member[];
  public translations: Localize;
  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }

  constructor(private teamService: TeamService, private getDataService: GetDataService) { }

  public ngOnInit(): void {
<<<<<<< HEAD
    this.teamService.getData().subscribe((resp) => {
      resp.team.forEach(async (member: Member) => {
        if (!member.avatar) {
          member.avatar = await this.teamService.getAvatar(member.githubName);
        }
        return member;
      });
=======
    this.getDataService.language.subscribe((lang: string) => {
      this.parseData(lang);
    });
>>>>>>> feat: add data to team from cms

    this.parseData(this.getDataService.initLanguage);
  }

  public parseData(lang: string): void {
    this.getDataService.getDataFromCms({
      query: null, contentType:
        `member${lang[0].toUpperCase() + lang.slice(1)}`
    }).subscribe((response) => {
      this.team = null;
      this.team = response.map((member) => {
        return {
          role: member.fields.role,
          githubName: member.fields.githubName,
          avatar: member.fields.avatar,
          name: member.fields.name,
          description: member.fields.description,
          links: {
            telegram: member.fields.telegram,
            vk: member.fields.vk,
            linkedIn: member.fields.linkedIn
          }
        };
      });
    });

    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });
  }
}
