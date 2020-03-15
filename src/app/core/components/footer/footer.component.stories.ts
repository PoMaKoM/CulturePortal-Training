import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';

storiesOf('Footer', module).addDecorator(moduleMetadata({
  declarations: [FooterComponent]
})).add('Footer', () => {
  return {
    template: '<app-footer></app-footer>'
  };
});
