import { Environment } from './environment.model';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWxweTg2IiwiYSI6ImNrN3AwdnpxaTBlODkzZ3N3eXRpa3lwMGMifQ.Tsm93rjLl9xD2r-p_0j38w'
  },
  contentful: {
    spaceId: '4lshcf7o85km',
    token: '5pbPwLvnMTmrY6W2Nsxz-6DlLilT0q9b3Ndnw2qVi1w'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
