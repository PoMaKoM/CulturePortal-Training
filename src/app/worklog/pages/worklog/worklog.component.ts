import { Component, OnInit } from '@angular/core';
import { WorklogService } from '../../services/worklog.service';
import { IResponse } from '../../models/i-response.model';
import { IPerson } from '../../models/i-person.model';
import { IEvaluation } from '../../models/i-evaluation.model';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {

  public response: IResponse;
  public persons: IPerson[];
  public evaluation: IEvaluation[];

  constructor(private worklogService: WorklogService) { }

  public ngOnInit(): void {
    this.worklogService.getData().subscribe((response: IResponse) => {
      this.response = response;
      this.persons = response.data;
      this.evaluation = response.evaluation;
    });

  }
}
