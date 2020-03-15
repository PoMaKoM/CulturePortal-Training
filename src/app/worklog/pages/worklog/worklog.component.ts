import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetDataService } from '../../../core/services/get-data.service';
import { WorklogService } from '../../services/worklog.service';
import { Localize } from '../../../shared/models/localize.model';
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
  public translations: Localize;

  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }

  constructor(private worklogService: WorklogService, private getDataService: GetDataService) { }

  public ngOnInit(): void {
    this.worklogService.getData().subscribe((response: IResponse) => {
      this.response = response;
      this.persons = response.data;
      this.evaluation = response.evaluation;
    });
    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });

  }
}
