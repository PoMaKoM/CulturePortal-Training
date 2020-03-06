import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DirectorOfDayComponent } from './components/director-of-day/director-of-day.component';


@NgModule({
  declarations: [MainPageComponent, DirectorOfDayComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
