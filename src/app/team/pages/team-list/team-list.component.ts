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
  constructor(private teamService: TeamService) {}

  public ngOnInit(): void {
    this.teamService.getData().subscribe((resp) => {
      resp.team.forEach(async (member: Member) => {
        if (!member.avatar) {
          member.avatar = await this.teamService.getAvatar(member.githubName);
        }
        return member;
      });

      this.team = resp.team;
    });
  }
}
