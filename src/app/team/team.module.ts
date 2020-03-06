import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';


@NgModule({
  declarations: [TeamListComponent, TeamMemberComponent],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
