import { storiesOf, moduleMetadata } from '@storybook/angular';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { IWorklog } from '../../models/i-work.model';

const worklogData: IWorklog[] = [
  {
    'id': 0,
    'timeSpent': 8,
    'description': 'I did something'
  },
  {
    'id': 1,
    'timeSpent': 1,
    'description': 'I did something'
  },
  {
    'id': 2,
    'timeSpent': 14,
    'description': 'I did something'
  }
  ,
  {
    'id': 3,
    'timeSpent': 7,
    'description': 'I did something'
  },
  {
    'id': 4,
    'timeSpent': 9,
    'description': 'I did something'
  }
];

storiesOf('Worklog', module).addDecorator(moduleMetadata({
  declarations: [TableComponent],
  imports: [MatTableModule]
})).add('Table', () => {
  return {
    template: '<app-table [worklogData]=worklogData></app-table>',
    props: {
      worklogData
    }
  };
});
