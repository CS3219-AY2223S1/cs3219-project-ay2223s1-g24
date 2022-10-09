import { useCookies } from "react-cookie";

function CheckSession(props) {
    const [cookies, setCookie] = useCookies([
      "name",
      "email",
      "jwtToken",
      "roomID",
      "firstQuestionHash",
      "secondQuestionHash",
      "difficulty",
    ]);

    // props from react-router-dom
    console.log("checkSession is being fired!")
    console.log(props)
    return cookies.roomID !== ""
    // return new Promise((resolve, reject) => {
    //   resolve({ user: { email: "user@gmai.com", name: "Test" } });
    // });
}

export default CheckSession;
