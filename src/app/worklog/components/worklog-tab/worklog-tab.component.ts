import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from '../../models/i-person.model';

@Component({
  selector: 'app-worklog-tab',
  templateUrl: './worklog-tab.component.html',
  styleUrls: ['./worklog-tab.component.scss']
})
export class WorklogTabComponent implements OnInit {
  @Input() public time: string;
  @Input() public desc: string;
  @Input() public person: IPerson[];
  constructor() { }

  public ngOnInit(): void {
  }
}
