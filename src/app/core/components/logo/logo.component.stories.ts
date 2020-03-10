import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LogoComponent } from './logo.component';

storiesOf('Header', module).addDecorator(moduleMetadata({
  declarations: [LogoComponent]
})).add('Logo', () => {
  return {
    template: '<app-logo></app-logo>'
  };
});
