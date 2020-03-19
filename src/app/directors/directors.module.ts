import { SharedModule } from './../shared/shared.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectorComponent } from './components/director/director.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { FilterPipe } from './pipes/filter.pipe';
import { OverlayDirective } from './directives/overlay.directive';
import { DialogFilmsListComponent } from './components/dialog-films-list/dialog-films-list.component';
import { MapComponent } from './components/map/map.component';
import { DialogVideoComponent } from './components/dialog-video/dialog-video.component';

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
    MapComponent,
    DialogVideoComponent,
  ],
  imports: [CommonModule, DirectorsRoutingModule,
    DirectorsRoutingModule, SharedModule],
  exports: [TimelineComponent],

  providers: [SearchService]
})
export class DirectorsModule {}
