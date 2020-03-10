import { DetailsInfoDirector } from './details-info-director.model';
import { PhotoDirector } from './photo-director.model';

export interface InfoDirector {
  id: string;
  avatar: string;
  gallery: Array<PhotoDirector>;
  video: string;
  be: DetailsInfoDirector;
  ru: DetailsInfoDirector;
  en: DetailsInfoDirector;
}
