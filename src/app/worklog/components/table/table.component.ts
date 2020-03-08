import { Component, OnInit, Input } from '@angular/core';
import { IWorklog } from '../../models/work.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public worklogData: IWorklog[];
  public displayedColumns: string[] = ['timeSpent', 'description'];

  constructor() { }

  public ngOnInit(): void {
  }
}
