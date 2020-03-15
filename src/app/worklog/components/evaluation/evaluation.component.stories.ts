import { storiesOf, moduleMetadata } from '@storybook/angular';
import { EvaluationComponent } from './evaluation.component';
import {MatCardModule} from '@angular/material/card';
import { IEvaluation } from '../../models/i-evaluation.model';
import {MatCheckboxModule} from '@angular/material/checkbox';

const evaluation: IEvaluation[] = [
  {
    'title': 'ToDo name',
    'points': [
      {
        'description': `some kind of task 1`,
        'flag': true
      },
      {
        'description': 'some kind of task 2',
        'flag': false
      },
      {
        'description': 'some kind of task 3',
        'flag': true
      },
      {
        'description': 'some kind of task 4',
        'flag': false
      }
    ]
  }
];

storiesOf('Worklog', module).addDecorator(moduleMetadata({
  declarations: [EvaluationComponent],
  imports: [MatCardModule, MatCheckboxModule]
})).add('Evaluation', () => {
  return {
    template: '<app-evaluation [evaluation]=evaluation></app-evaluation>',
    props: {
      evaluation
    }
  };
});
