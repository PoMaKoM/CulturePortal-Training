import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../models/person.model';
import { WorklogService } from '../../services/worklog.service';
import { IResponse } from '../../models/response.model';

@Component({
  selector: 'app-worklog-tab',
  templateUrl: './worklog-tab.component.html',
  styleUrls: ['./worklog-tab.component.scss']
})
export class WorklogTabComponent implements OnInit {

  public persons: IPerson[];
  constructor(private worklogService: WorklogService) { }

  public ngOnInit(): void {
    this.worklogService.getData().subscribe((data: IResponse) => this.persons = data.data);
  }
}
