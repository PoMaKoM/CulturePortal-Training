import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LanguageComponent } from './language.component';
import { MatButtonModule } from '@angular/material/button';

storiesOf('Header', module).addDecorator(moduleMetadata({
  declarations: [LanguageComponent],
  imports: [MatButtonModule]
})).add('Languages', () => {
  return {
    template: '<app-language></app-language>'
  };
});
