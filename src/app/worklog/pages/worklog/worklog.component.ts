import { Component, OnInit } from '@angular/core';
import { WorklogService } from '../../services/worklog.service';
import { IPerson } from '../../models/person.model';

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.scss']
})
export class WorklogComponent implements OnInit {

  public persons: IPerson[];
  constructor(private worklogService: WorklogService) { }

  public ngOnInit(): void {
    this.worklogService.getData().subscribe((data: IPerson[]) => this.persons = data);
  }
}
