import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorklogService } from '../../services/worklog.service';
import { Localize } from '../../../shared/models/localize.model';
import { IResponse } from '../../models/i-response.model';
import { IPerson } from '../../models/i-person.model';
import { IEvaluation } from '../../models/i-evaluation.model';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { FormArray } from '@angular/forms';

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

  constructor(private getDataService: GetDataService) { }

  public ngOnInit(): void {
    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });

    this.getDataService.language.subscribe((lang: string) => {
      this.parseDataEv(this.getDataService.getCurrentLanguage());
      this.parseDataPerson(this.getDataService.getCurrentLanguage());
    });
    this.parseDataEv(this.getDataService.getCurrentLanguage());
    this.parseDataPerson(this.getDataService.getCurrentLanguage());
  }

  public parseDataEv(lang: string): void {
    this.getDataService.getDataFromCms({
      query: null, contentType:
        `evaluation${lang[0].toUpperCase() + lang.slice(1)}`
    }).subscribe((response) => {
      this.evaluation = response.map((ev) => {
        return {
          title: ev.fields.name,
          points: ev.fields.data.points,
          cost: ev.fields.data.cost
        };
      });
    });
  }

  public parseDataPerson(lang: string): void {
    this.getDataService.getDataFromCms({
      query: null, contentType:
        `worklog${lang[0].toUpperCase() + lang.slice(1)}`
    }).subscribe((response) => {
      this.persons = response.map((ev) => {
        return {
          name: ev.fields.name,
          worklog: ev.fields.data.worklog
        };
      });
    });
  }
}
