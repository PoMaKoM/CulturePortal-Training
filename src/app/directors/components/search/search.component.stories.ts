import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SearchComponent } from './search.component';
storiesOf('Details', module).addDecorator(moduleMetadata({
  declarations: [SearchComponent],
  imports: []
})).add('Search', () => {
  return {
    template: `<div action="" style=" display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    background-color: var(--directors-search-bg-color);">
  <input style="width: 25vw;
    max-width: 400px;
    height: 30px;
    background-color: var(--directors-main-bg-color);
    border: none;
    padding: 3px;" [(ngModel)]="query" (ngModelChange)="searchFor()"
    type="text" placeholder="search for a director!">
  <img src="/assets/search.svg" alt="search" style="position: relative;
    right: 35px;">
</div>
  `,
  };
});
