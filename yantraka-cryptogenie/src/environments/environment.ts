// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL : 'https://api.yantraka.ai',
  // API_URL: 'https://yqo8ooydq8.execute-api.ap-southeast-1.amazonaws.com/production',
  COUNTRY_CODE: "+1",
  AUTH_TOKEN: "JSX6OYMBt67rYz7sKH8CE2EVdhJlotV91dTXpxAO",
  auth: {
    domain: 'cryptogenie.au.auth0.com',
    clientId: 'mUfAhQBtXOu0GjMRYeKNnQbEhasSiAt4',
    redirectUri: 'http://localhost:4200/predictions',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
