import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team.service';
import { Team, Member } from '../../models/team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  public team: Team;
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

    //       const ids: string[] = resp.items.map(item => item.id.videoId);
    // .subscribe(resp => {
    //       this.searchService.getViodeoList(ids).subscribe(videoList => {
    //         this.videos = videoList;
    //       });
    //     }
  }
}
