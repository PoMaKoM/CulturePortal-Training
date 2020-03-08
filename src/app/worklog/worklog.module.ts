import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorklogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { WorklogTabComponent } from './components/worklog-tab/worklog-tab.component';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { EvaluationComponent } from './components/evaluation/evaluation.component';

@NgModule({
  declarations: [WorklogComponent, WorklogTabComponent, TableComponent, EvaluationComponent],
  imports: [CommonModule,
    WorklogRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule],
  exports: [WorklogComponent, HttpClientModule],
})
export class WorklogModule { }
