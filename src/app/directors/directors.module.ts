import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectorComponent } from './components/director/director.component';
import { SearchComponent } from './components/search/search.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsService } from '../core/services/details.service';
import { SearchService } from './services/search.service';
import { FilterPipe } from './pipes/filter.pipe';
import { OverlayDirective } from './directives/overlay.directive';
import { DialogFilmsListComponent } from './components/dialog-films-list/dialog-films-list.component';
import { MapComponent } from './components/map/map.component';
import { VideoComponent } from './components/video/video.component';


@NgModule({
  declarations: [
    DirectorsListComponent,
    DetailsComponent,
    DirectorComponent,
    SearchComponent,
    TimelineComponent,
    FilterPipe,
    OverlayDirective,
    DialogFilmsListComponent,
    MapComponent
    VideoComponent
  ],
  imports: [
    CommonModule,
    DirectorsRoutingModule,
    FormsModule,
    MglTimelineModule,
    DirectorsRoutingModule,
    MatListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [TimelineComponent],

  providers: [SearchService]
})
export class DirectorsModule {}
