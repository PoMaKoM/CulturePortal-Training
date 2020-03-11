import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectorComponent } from './components/director/director.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsService } from './services/details.service';
import { SearchService } from './services/search.service';
import { FilterPipe } from './pipes/filter.pipe';
import { TimelineComponent } from './components/timeline/timeline.component';
import { OverlayDirective } from './directives/overlay.directive';

@NgModule({
  declarations: [
    DirectorsListComponent,
    DetailsComponent,
    DirectorComponent,
    SearchComponent,
    TimelineComponent,
    FilterPipe,
    OverlayDirective
  ],
  imports: [
    CommonModule,
    DirectorsRoutingModule,
    FormsModule,
    MglTimelineModule,
  ],
  providers: [
    SearchService,
    DetailsService
  ]
})
export class DirectorsModule { }
