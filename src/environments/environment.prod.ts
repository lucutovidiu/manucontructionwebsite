const apiEndpoint = "https://lazurconcept.herokuapp.com";

export const environment = {
  production: true,
  projects: {
    GET_ALL_PROJECTS: apiEndpoint + "/api/projects",
    POST_CREATE_PROJECT: apiEndpoint + "/api/projects/create-project",
    PUT_UPDATE_PROJECT: apiEndpoint + "/api/projects/update-project/",
    DELETE_PROJECT: apiEndpoint + "/api/projects/delete-project/",
    GET_PROJECT_BY_ID: apiEndpoint + "/api/projects/project/"
  }
};
