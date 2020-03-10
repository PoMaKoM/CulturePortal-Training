import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';

storiesOf('Header', module).addDecorator(moduleMetadata({
  declarations: [NavigationComponent],
  imports: [MatButtonModule]
})).add('Navigation', () => {
  return {
    template: '<app-navigation></app-navigation>'
  };
});
