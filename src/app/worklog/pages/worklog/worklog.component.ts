import { Component, OnInit } from '@angular/core';
import { WorklogService } from '../../services/worklog.service';
import { IResponse } from '../../models/i-response.model';
import { IPerson } from '../../models/i-person.model';
import { IEvaluation } from '../../models/i-evaluation.model';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss'],
  animations: [
    flyInOut,
    expand
  ],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  }
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
