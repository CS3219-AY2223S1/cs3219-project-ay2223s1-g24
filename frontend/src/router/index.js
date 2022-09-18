const cookiePackage = require("react-cookie");

const [cookie, setCookie, removeCookie] = cookiePackage.useCookies([
  "name",
  "email",
  "jwtToken",
]);

export default [cookie, setCookie, removeCookie];
