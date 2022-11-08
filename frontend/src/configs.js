const URI_USER_SVC = process.env.URI_USER_SVC || "http://localhost:8000";

const PREFIX_USER_SVC = "/api/user";

export const URL_USER_SVC = URI_USER_SVC + PREFIX_USER_SVC;

// export const USER_SERVICE_API_ENDPOINT = "http://user-service-dev.ap-southeast-1.elasticbeanstalk.com/api/users/";
export const USER_SERVICE_API_ENDPOINT = "http://localhost:8088/api/users/";

// export const MATCHING_SERVICE_SOCKET_ENDPOINT =
//   "http://matching-service-dev.ap-southeast-1.elasticbeanstalk.com/";
export const MATCHING_SERVICE_SOCKET_ENDPOINT = "http://localhost:8080";

// export const COLLABORATION_SERVICE_SOCKET_ENDPOINT =
//   "http://collaboration-service-dev.ap-southeast-1.elasticbeanstalk.com/";
export const COLLABORATION_SERVICE_SOCKET_ENDPOINT = "http://localhost:8081";
