import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorklogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { HttpClientModule } from '@angular/common/http';
import { WorklogTabComponent } from './components/worklog-tab/worklog-tab.component';
import { TableComponent } from './components/table/table.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { DifficultiesComponent } from './components/difficulties/difficulties.component';

@NgModule({
  declarations: [
    WorklogComponent,
    WorklogTabComponent,
    TableComponent,
    EvaluationComponent,
    DifficultiesComponent
  ],
  imports: [CommonModule, WorklogRoutingModule, SharedModule],
  exports: [WorklogComponent, HttpClientModule]
})
export class WorklogModule {}
