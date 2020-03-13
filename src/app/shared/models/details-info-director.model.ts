import { BiographyDirector } from './biography-director.model';
import { FilmsDirector } from './films-director.model';

interface Video {
  link: string;
  title: string;
}

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
      };
    };
    death: {
      date: string;
      place?: string;
    };
  };
  nationality: string;
  buried?: string;
  profession: Array<string>;
  films: Array<FilmsDirector>;
  other?: string;
  video: Video;
}
