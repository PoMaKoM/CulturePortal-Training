import { Component, OnInit, Input } from '@angular/core';
import { IEvaluation } from '../../models/i-evaluation.model';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  @Input() public evaluation: IEvaluation[];
  public checked: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
