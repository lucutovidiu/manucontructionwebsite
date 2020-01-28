const apiEndpoint = 'http://192.168.1.3';
// const apiEndpoint = "http://lazurconcept.herokuapp.com";

// if (typeof window != "undefined") {
//   this.apiEndpoint = window.origin;
// }

export const environment = {
  production: true,
  projects: {
    GET_ALL_PROJECTS: apiEndpoint + "/api/projects",
    POST_CREATE_PROJECT: apiEndpoint + "/api/projects/create-project",
    PUT_UPDATE_PROJECT: apiEndpoint + "/api/projects/update-project/",
    DELETE_PROJECT: apiEndpoint + "/api/projects/delete-project/",
    GET_PROJECT_BY_ID: apiEndpoint + "/api/projects/project/",
    API_END_POINT:apiEndpoint
  }
};
