import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DifficultiesComponent } from './difficulties.component';
import {MatCardModule} from '@angular/material/card';

storiesOf('Worklog', module).addDecorator(moduleMetadata({
  declarations: [DifficultiesComponent],
  imports: [MatCardModule]
})).add('Difficulties', () => {
  return {
    template: '<app-difficulties></app-difficulties>',
  };
});
