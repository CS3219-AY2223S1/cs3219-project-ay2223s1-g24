const jwt = require('jsonwebtoken');


const getToken = (req) => {

  const array = req.rawHeaders

  let token = null;
  for (let index = array.length - 1; index >= 0; index--) {
    const currString = array[index];
    if (currString.includes("jwtToken")) {
      const cookies = currString.split("; ")
      for (const cookie of cookies) {
        if (cookie.includes("jwtToken")) {
          token = cookie.slice(9)
        }
      }
    }
  }
  return token
}

module.exports = (req, res, next) => {
  try {
    const token = getToken(req)
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { email: decodedToken.email, name: decodedToken.name};
    // console.log(token)
    // console.log(decodedToken)
    next();
  } catch (error) {
    res.status(401).json({
      message: "Authentication failed!"
    })
  }
};
