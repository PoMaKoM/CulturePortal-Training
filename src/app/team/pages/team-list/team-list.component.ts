import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  public team: Member[];
  constructor(private teamService: TeamService) {}

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
  }
}
