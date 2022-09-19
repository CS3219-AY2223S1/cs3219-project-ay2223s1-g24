const URI_USER_SVC = process.env.URI_USER_SVC || "http://localhost:8000";

const PREFIX_USER_SVC = "/api/user";

export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;

export const HEROKU_ENDPOINT = "http://localhost:3000/api/users/";
// "https://user-service-g24.herokuapp.com/api/users/";

// export const HEROKU_ENDPOINT =
//   "https://b1backend.herokuapp.com/api/users/";
