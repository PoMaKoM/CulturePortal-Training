import { PhotoDirector } from './photo-director.model';
import { DetailsInfoDirector } from './details-info-director.model';

export interface InfoDirector {
  id: string;
  avatar: string;
  gallery: Array<PhotoDirector>;
  be: DetailsInfoDirector;
  ru: DetailsInfoDirector;
  en: DetailsInfoDirector;
}
