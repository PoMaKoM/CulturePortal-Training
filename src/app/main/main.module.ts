import { SharedModule } from './../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DirectorOfDayComponent } from './components/director-of-day/director-of-day.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

MDBBootstrapModule.forRoot();

@NgModule({
  declarations: [MainPageComponent, DirectorOfDayComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, MDBBootstrapModule]
  // exports: [MainPageComponent]
})
export class MainModule {}
