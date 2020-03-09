import { PhotoDirector, DetailsInfoDirector } from './directors.model';

export interface InfoDirector {
  id: string;
  avatar: string;
  gallery: Array<PhotoDirector>;
  video: string;
  be: DetailsInfoDirector;
  ru: DetailsInfoDirector;
  en: DetailsInfoDirector;
}
