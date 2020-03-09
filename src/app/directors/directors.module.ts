import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsListComponent } from './pages/directors-list/directors-list.component';
import { DetailsComponent } from './pages/details/details.component';
import { DirectorComponent } from './components/director/director.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsService } from './services/details.service';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [DirectorsListComponent, DetailsComponent, DirectorComponent, SearchComponent],
  imports: [
    CommonModule,
    DirectorsRoutingModule,
    FormsModule,
  ],
  providers: [
    SearchService,
    DetailsService
  ]
})
export class DirectorsModule { }
