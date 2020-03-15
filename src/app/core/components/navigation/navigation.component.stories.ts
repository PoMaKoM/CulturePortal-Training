import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { Menu } from 'src/app/shared/models/localize.model';

const menu: Menu = {
  1: 'Link 1',
  2: 'Link 2',
  3: 'Link 3',
  4: 'Link 4',
  5: 'Link 5'
};

storiesOf('Header', module).addDecorator(moduleMetadata({
  declarations: [NavigationComponent],
  imports: [MatButtonModule]
})).add('Navigation', () => {
  return {
    template: '<app-navigation [menu]=menu></app-navigation>',
    props: {
      menu
    }
  };
});
