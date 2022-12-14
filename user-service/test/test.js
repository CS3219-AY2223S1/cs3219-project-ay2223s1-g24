const { expect } = require("chai");
var chai = require("chai");
var chaiHttp = require("chai-http");
// const chaiAsPromised = require('chai-as-promised');
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Token = require("../models/token");
var server = require("../server");

chai.should();
chai.use(chaiHttp);

before((done) => {
  User.deleteMany({}).catch((err) => {
    console.log(
      "Some error trying to clean up test user database BEFORE tests"
    );
    console.log(err);
  });
  Token.deleteMany({}).catch((err) => {
    console.log(
      "Some error trying to clean up test token database BEFORE tests"
    );
    console.log(err);
  });
  done();
});

after((done) => {
  User.deleteMany({}).catch((err) => {
    console.log("Some error trying to clean up test user database AFTER tests");
    console.log(err);
  });

  Token.deleteMany({}).catch((err) => {
    console.log(
      "Some error trying to clean up test token database BEFORE tests"
    );
    console.log(err);
  });
  done();
});

describe("Test API Routes", function () {
  // To be used later during verification of email
  let userId = null;
  let token = null;

  // get users
  it("Verify that there are 0 users in the DB", (done) => {
    chai
      .request(server)
      .get("/api/users/getUsers")
      .end((err, res) => {
        res.should.have.status(200);
        res.body["users"].length.should.be.equal(0);
        done();
      });
  });

  // signup
  it("Verify that signup works for new user", (done) => {
    const newUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com", //note that any caps in email will be made small cap so for testing purposes, use small cap for email
      password: "Mohammed",
    };

    chai
      .request(server)
      .post("/api/users/signup")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(201);
        res.body["message"].should.be.equal(
          "An Email sent to your account please verify"
        );
        userId = res.body["userId"];
        token = res.body["token"];
        done();
      });
  });

  it("Verify that existing user cannot sign up again", (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
    };

    chai
      .request(server)
      .post("/api/users/signup")
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(409);
        res.body["invalidUsername"].should.be.equal(true);
        res.body["invalidEmail"].should.be.equal(true);
        done();
      });
  });

  it("Verify that signup does not work if the request body is of the wrong format", (done) => {
    const existingUser = {
      username: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
    };

    chai
      .request(server)
      .post("/api/users/signup")
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal(
          "Invalid inputs passed, please check your data."
        );
        done();
      });
  });

  // login
  it("Verify that existing unverified user cannot log in", (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
    };

    chai
      .request(server)
      .post("/api/users/login")
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(401);
        res.body["message"].should.be.equal(
          "An email sent to your account please verify"
        );
        done();
      });
  });

  it("Verify that an unverified user cannot request for password reset email", (done) => {
    const payload = {
      email: "valverdo@alberto.com",
    };

    chai
      .request(server)
      .post(`/api/users/sendPasswordChange`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.equal("User has not been verified yet");
        done();
      });
  });

  // verify email
  it("Verify that email verification of existing unverified user works", (done) => {
    chai
      .request(server)
      .get(`/api/users/${userId}/verify/${token}/`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body["message"].should.be.equal("Email verified successfully");

        // const token = res.body["token"];
        // const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        // const decodedUserData = {
        //   email: decodedToken.email,
        //   name: decodedToken.name,
        // };
        // decodedUserData["email"].should.be.equal(existingUser["email"]);
        // decodedUserData["name"].should.be.equal(existingUser["name"]);
        done();
      });
  });

  // verify that login works after verification
  it("Verify that verified user can login", (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
      verified: true,
    };
    chai
      .request(server)
      .post("/api/users/login")
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body["message"].should.be.equal("Logged in!");

        const token = res.body["token"];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const decodedUserData = {
          email: decodedToken.email,
          name: decodedToken.name,
        };
        decodedUserData["email"].should.be.equal(existingUser["email"]);
        decodedUserData["name"].should.be.equal(existingUser["name"]);
        done();
      });
  });

  it("Verify that existing user with wrong password cannot log in", (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Salah",
    };

    chai
      .request(server)
      .post("/api/users/login")
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.be.equal("Wrong Password");
        done();
      });
  });

  it("Verify that non-existing user cannot log in", (done) => {
    const existingUser = {
      name: "Stamford",
      email: "stamford@bridge.com",
      password: "chelseaFC",
    };

    chai
      .request(server)
      .post("/api/users/login")
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.equal("No such account.");
        done();
      });
  });

  // update password
  it("Verify if the request body is of wrong format, updatePassword will not proceed", (done) => {
    const updatedUser = {
      name: "Heather Swanson",
      email: "strong@woman.com",
      password: "notAMan",
    };

    chai
      .request(server)
      .put("/api/users/updatePassword")
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal(
          "Invalid inputs passed, please check your data."
        );
        done();
      });
  });

  it("Verify that an existing user's password cannot be updated if the old password is wrong", (done) => {
    const updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Liverpool",
      new_password: "Alfredo",
    };

    chai
      .request(server)
      .put("/api/users/updatePassword")
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.be.equal("Wrong old password. Password not updated.");
        done();
      });
  });

  it("Verify that an existing user's password is cannot be updated if the new password is not at least length 6", (done) => {
    const updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
      new_password: "Jack",
    };

    chai
      .request(server)
      .put("/api/users/updatePassword")
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal(
          "Invalid inputs passed, please check your data."
        );
        done();
      });
  });

  it("Verify that an existing user's password is updated when the old password is correct", (done) => {
    const updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
      new_password: "Alfredo",
    };

    chai
      .request(server)
      .put("/api/users/updatePassword")
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body["message"].should.be.equal("User password updated!");

        const token = res.body["token"];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const decodedUserData = {
          email: decodedToken.email,
          name: decodedToken.name,
        };
        decodedUserData["email"].should.be.equal(updatedUser["email"]);
        decodedUserData["name"].should.be.equal(updatedUser["name"]);
        done();
      });
  });

  it("Verify that an if user does not exist in database, update password returns an error", (done) => {
    const updatedUser = {
      name: "Heather Swanson",
      email: "strong@woman.com",
      password: "notAMan",
      new_password: "DefinitelyNotAMan",
    };

    chai
      .request(server)
      .put("/api/users/updatePassword")
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.equal(
          "User not found in database to update password."
        );
        done();
      });
  });

  // update password via email

  // verify that if email does not exist in database, email for password change is not sent
  it("Verify that an if user does not exist in database, password reset email is not sent", (done) => {
    const payload = {
      email: "strong@woman.com",
    };

    chai
      .request(server)
      .post(`/api/users/sendPasswordChange`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.equal("User not found in database");
        done();
      });
  });

  // verify that email can be sent via sendPasswordChange endpoint
  it("Verify that password reset email will be sent", (done) => {
    const payload = {
      email: "valverdo@alberto.com",
    };

    chai
      .request(server)
      .post(`/api/users/sendPasswordChange`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200);
        res.body["message"].should.be.equal("Password Reset Email sent");
        done();
      });
  });

  it("Verify that update password via email does not work given invalid token", (done) => {
    const payload = {
      password: "newP@ssword",
      token: "INVALID_TOKEN",
    };

    chai
      .request(server)
      .post(`/api/users/resetPassword`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  // delete user
  it("Verify that delete works for existing user", (done) => {
    const deleteUser = {
      email: "valverdo@alberto.com",
      password: "Alfredo",
    };
    chai
      .request(server)
      .delete(`/api/users/deleteUser`)
      .send(deleteUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.equal(`Deleted: (email: ${deleteUser.email})`);
        done();
      });
  });

  it("Verify that delete returns 404 if the user does not exist", (done) => {
    const deletedUser = {
      email: "valverdo@alberto.com",
      password: "random, since it does not matter",
    };
    chai
      .request(server)
      .delete(`/api/users/deleteUser`)
      .send(deletedUser)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.equal(
          "User not found in database to delete account."
        );
        done();
      });
  });

  it("Verify that delete returns 400 if the request body is of the wrong format", (done) => {
    const deletedUser = {
      user_email: "valverdo@alberto.com",
      password: "random, since it does not matter",
    };
    chai
      .request(server)
      .delete(`/api/users/deleteUser`)
      .send(deletedUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal(
          "Invalid inputs passed, please check your data."
        );
        done();
      });
  });
});
