import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorklogRoutingModule } from './worklog-routing.module';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { WorklogTabComponent } from './components/worklog-tab/worklog-tab.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [WorklogComponent, WorklogTabComponent, TableComponent],
  imports: [CommonModule, WorklogRoutingModule, MatTabsModule, MatTableModule],
  exports: [WorklogComponent, HttpClientModule],
})
export class WorklogModule { }
