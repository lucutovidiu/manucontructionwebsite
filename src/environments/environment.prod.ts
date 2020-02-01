const apiEndpoint = "https://lazurconcept.herokuapp.com";
export const environment = {
  production: true,
  projects: {
    GET_ALL_PROJECTS: apiEndpoint + "/api/projects",
    POST_CREATE_PROJECT: apiEndpoint + "/api/projects/create-project",
    PUT_UPDATE_PROJECT: apiEndpoint + "/api/projects/update-project/",
    DELETE_PROJECT: apiEndpoint + "/api/projects/delete-project/",
    GET_PROJECT_BY_ID: apiEndpoint + "/api/projects/project/",
    UPLOAD_IMAGE_TEMORARY:apiEndpoint + "/api/projects/create-project/uploadpicture"
  },
  auth:{
    LOGIN_ENPOINT:apiEndpoint + "/api/login",
  }
};
