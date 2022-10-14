const URI_USER_SVC = process.env.URI_USER_SVC || "http://localhost:8000";

const PREFIX_USER_SVC = "/api/user";

export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;

// export const USER_SERVICE_API_ENDPOINT = "http://user-service-dev2.ap-southeast-1.elasticbeanstalk.com/api/users/";

export const USER_SERVICE_API_ENDPOINT = "http://localhost:8088/api/users/";
export const LOCALHOST_ENDPOINT = "http://localhost:8088/api/users/";
