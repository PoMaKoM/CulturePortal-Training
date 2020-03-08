import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorklogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WorklogComponent],
  imports: [CommonModule, WorklogRoutingModule],
  exports: [WorklogComponent, HttpClientModule],
})
export class WorklogModule { }
