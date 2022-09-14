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

const checkIfExpired = (decodedToken) => {
  const currTime = new Date().getTime()
  if (decodedToken.exp * 1000 < currTime) {
    console.log('Time Expired');
  }
  console.log(decodedToken)
  console.log(`current time: ${currTime}`)
  console.log(`token expiry time: ${decodedToken.exp * 1000}`)
}

module.exports = (req, res, next) => {
  try {
    const token = getToken(req)
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { email: decodedToken.email, name: decodedToken.name}
    next();
  } catch (error) {
    res.status(401).json({
      message: "Authentication failed!"
    })
  }
};
