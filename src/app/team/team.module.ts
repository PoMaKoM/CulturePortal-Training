import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TeamListComponent, TeamMemberComponent],
  imports: [CommonModule, TeamRoutingModule, MatButtonModule, FontAwesomeModule, MatProgressSpinnerModule]
})
export class TeamModule {}
