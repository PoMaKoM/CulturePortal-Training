import { BehaviorSubject } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Localize } from './../../../shared/models/localize.model';
import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { Member } from '../../models/member.model';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
  animations: [
    flyInOut,
    expand
  ],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
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
    this.teamService.getData().subscribe((resp) => {
      resp.team.forEach((member: Member) => {
        if (!member.avatar) {
          member.avatar = this.teamService.getAvatar();
        }
        return member;
      });

      this.team = resp.team;
    });

    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });
  }
}
