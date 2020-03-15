import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MglTimelineModule } from 'angular-mgl-timeline.9';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [ParallaxDirective],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule,
    MglTimelineModule,
    MatDialogModule,
    FontAwesomeModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [
    ParallaxDirective,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    FormsModule,
    MglTimelineModule,
    MatDialogModule,
    FontAwesomeModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class SharedModule {}
