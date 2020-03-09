import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectorComponent } from './components/director/director.component';
import { SearchComponent } from './components/search/search.component';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [DirectorsListComponent, DetailsComponent, DirectorComponent, SearchComponent, TimelineComponent],
  imports: [
    CommonModule,
    DirectorsRoutingModule
  ]
})
export class DirectorsModule { }
