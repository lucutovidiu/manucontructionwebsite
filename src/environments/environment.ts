// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const apiEndpoint = 'http://localhost';
export const environment = {
  production: false,
  projects: {
    GET_ALL_PROJECTS: apiEndpoint + "/api/projects",
    POST_CREATE_PROJECT: apiEndpoint + "/api/projects/create-project",
    PUT_UPDATE_PROJECT: apiEndpoint + "/api/projects/update-project/",
    DELETE_PROJECT: apiEndpoint + "/api/projects/delete-project/",
    GET_PROJECT_BY_ID: apiEndpoint + "/api/projects/project/"
  },
  auth:{
    LOGIN_ENPOINT:apiEndpoint + "/api/login",
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
