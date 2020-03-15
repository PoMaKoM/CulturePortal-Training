import { storiesOf, moduleMetadata } from '@storybook/angular';
import { WorklogTabComponent } from './worklog-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { IPerson } from '../../models/i-person.model';
import { IWorklog } from '../../models/i-work.model';
import { TableComponent } from '../table/table.component';
import { MatTableModule } from '@angular/material/table';

const worklog: IWorklog[] = [];

const person: IPerson[] = [
  {
    'name': 'User 1',
    worklog
  },
  {
    'name': 'User 2',
    worklog
  },
  {
    'name': 'User 3',
    worklog
  },
  {
    'name': 'User 4',
    worklog
  },
  {
    'name': 'User 5',
    worklog
  },
];

storiesOf('Worklog', module).addDecorator(moduleMetadata({
  declarations: [WorklogTabComponent, TableComponent],
  imports: [MatTabsModule, MatTableModule]
})).add('Worklog tab', () => {
  return {
    template: `<app-worklog-tab [person]=person></app-worklog-tab>`,
    props: {
      person
    }
  };
});
