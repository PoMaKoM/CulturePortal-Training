import { BiographyDirector } from './biography-director.model';
import { FilmsDirector } from './directors.model';

export interface DetailsInfoDirector {
  name: string;
  description: string;
  biography: Array<BiographyDirector>;
  dates: {
    birth: {
      date: string;
      place: {
        location: string;
        lat: string;
        lng: string;
      }
    };
    death: {
      date: string;
      place?: string;
    }
  };
  nationality: string;
  buried?: string;
  profession: Array<string>;
  films: Array<FilmsDirector>;
  other?: string;
}
