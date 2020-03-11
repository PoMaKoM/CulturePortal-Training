import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectorComponent } from './components/director/director.component';
import { SearchComponent } from './components/search/search.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DirectorsListComponent,
    DetailsComponent,
    DirectorComponent,
    SearchComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    MglTimelineModule,
    DirectorsRoutingModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [TimelineComponent]
})
export class DirectorsModule {}
