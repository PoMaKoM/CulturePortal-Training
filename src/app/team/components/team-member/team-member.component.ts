import { Component, OnInit, Input } from '@angular/core';
import { faGithub, faTelegramPlane, faVk, faLinkedin, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Member } from '../../models/team.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() public member: Member;
  public faGithub: IconDefinition = faGithub;
  public faTelegramPlane: IconDefinition = faTelegramPlane;
  public faVk: IconDefinition = faVk;
  public faLinkedin: IconDefinition = faLinkedin;
  public faBloggerB: IconDefinition = faBloggerB;

  constructor() {}

  public ngOnInit(): void {}
}
