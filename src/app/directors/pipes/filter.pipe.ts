import { Pipe, PipeTransform } from '@angular/core';
import { InfoDirector } from './../models/info-director.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(directors: InfoDirector[], filteringValue: string, language: string): InfoDirector[] {

    if (!directors || !filteringValue) {
      return directors;
    }
    return directors.filter((director: InfoDirector) =>
      director[language].name.toLowerCase().includes(filteringValue));
  }

}
