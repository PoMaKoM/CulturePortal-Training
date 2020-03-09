export interface Directors {
  data: Array<InfoDirector>;
}

export interface InfoDirector {
  id: string;
  avatar: string;
  gallery: Array<PhotoDirector>;
  video: string;
  be: DetailsInfoDirector;
  ru: DetailsInfoDirector;
  en: DetailsInfoDirector;
}

export interface PhotoDirector {
  description: string;
  link: string
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
      }
    };
    death: {
      date: string;
      place: string;
    }
  },
  nationality: string;
  buried: string;
  profession: Array<string>;
  films: Array<FilmsDirector>;
  other: string;
}

export interface BiographyDirector {
  period: string;
  description: string;
}

export interface FilmsDirector {
  name: string;
  year: number;
}
