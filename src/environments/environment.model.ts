export interface Environment {
  production: boolean;
  mapbox: {
    accessToken: string;
  };
  contentful: {
    spaceId: string,
    token: string
  };
}
