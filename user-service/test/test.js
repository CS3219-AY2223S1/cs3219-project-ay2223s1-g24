const { expect } = require('chai');
var chai = require('chai');
var chaiHttp = require('chai-http');
// const chaiAsPromised = require('chai-as-promised');
const jwt = require("jsonwebtoken");

const User = require('../models/user');
var server = require('../server');

chai.should();
chai.use(chaiHttp);


before((done) => {
  User.deleteMany({}).catch((err) => {
    console.log("Some error trying to clean up test database BEFORE tests")
    console.log(err)
  });
  done();
});

after((done) => {
  User.deleteMany({}).catch((err) => {
    console.log("Some error trying to clean up test database AFTER tests")
    console.log(err)
  });
  done();
})


describe('Test API Routes', function () {

  // GET
  it('Verify that without a valid authorization, user cannot check number of users in the DB', (done) => {
    chai.request(server)
      .get('/api/users/getUsers')
      .end((err, res) => {
        res.should.have.status(401);
        res.body["message"].should.be.equal('Authentication failed!');
        done();
      });
  });

  
  // POST
  it('Verify that signup works for new user', (done) => {

    const newUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com", //note that any caps in email will be made small cap so for testing purposes, use small cap for email
      password: "Mohammed"
    }

    chai.request(server)
      .post('/api/users/signup')
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(201);
        res.body["result"].should.be.a('object');
        res.body["result"]["name"].should.be.equal(newUser["name"]);
        res.body["result"]["email"].should.be.equal(newUser["email"]);

        const token = res.body["token"]
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const decodedUserData = { email: decodedToken.email, name: decodedToken.name};
        decodedUserData["email"].should.be.equal(newUser["email"]);
        decodedUserData["name"].should.be.equal(newUser["name"]);
        done();
      });
  });


  it('Verify that existing user cannot sign up again', (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed"
    }

    chai.request(server)
      .post('/api/users/signup')
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(409);
        res.body["invalidUsername"].should.be.equal(true);
        res.body["invalidEmail"].should.be.equal(true);
        done();
      });
  });


  it('Verify that signup does not work if the request body is of the wrong format', (done) => {
    const existingUser = {
      username: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed"
    }

    chai.request(server)
      .post('/api/users/signup')
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal('Invalid inputs passed, please check your data.');
        done();
      });
  });


  it('Verify that existing user can log in', (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed"
    }

    chai.request(server)
      .post('/api/users/login')
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body["message"].should.be.equal("Logged in!");

        const token = res.body["token"]
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const decodedUserData = { email: decodedToken.email, name: decodedToken.name};
        decodedUserData["email"].should.be.equal(existingUser["email"]);
        decodedUserData["name"].should.be.equal(existingUser["name"]);
        done();
      });
  });

  it('Verify that existing user with wrong password cannot log in', (done) => {
    const existingUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Salah"
    }

    chai.request(server)
      .post('/api/users/login')
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.be.equal('Wrong Password');
        done();
      });
  });


  it('Verify that non-existing user cannot log in', (done) => {
    const existingUser = {
      name: "Stamford",
      email: "stamford@bridge.com",
      password: "chelseaFC"
    }

    chai.request(server)
      .post('/api/users/login')
      .send(existingUser)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.equal("No such account.");
        done();
      });
  });


  it('Verify if the request body is of wrong format, updatePassword will not proceed', (done) => {

    const updatedUser = {
      name: "Heather Swanson",
      email: "strong@woman.com",
      password: "notAMan"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal('Invalid inputs passed, please check your data.');
        done();
      });
  });


  it('Verify that an existing user\'s password cannot be updated if the old password is wrong', (done) => {
    const updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Liverpool",
      new_password: "Alfredo"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.be.equal("Wrong old password. Password not updated.");
        done();
      });
  });


  it('Verify that an existing user\'s password is cannot be updated if the new password is not at least length 6', (done) => {
    const updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
      new_password: "Jack"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal('Invalid inputs passed, please check your data.');
        done();
      });
  });


  it('Verify that an existing user\'s password is updated when the old password is correct', (done) => {
    const updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed",
      new_password: "Alfredo"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body["message"].should.be.equal("User password updated!");

        const token = res.body["token"]
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const decodedUserData = { email: decodedToken.email, name: decodedToken.name};
        decodedUserData["email"].should.be.equal(updatedUser["email"]);
        decodedUserData["name"].should.be.equal(updatedUser["name"]);
        done();
      });
  });


  it('Verify that an if user does not exist in database, update password returns an error', (done) => {

    const updatedUser = {
      name: "Heather Swanson",
      email: "strong@woman.com",
      password: "notAMan",
      new_password: "DefinitelyNotAMan"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.equal("User not found in database to update password.");
        done();
      });
  });


  it('Verify that delete works for existing user', (done) => {
    const deleteUser = {
      email: "valverdo@alberto.com",
      password: "Alfredo"
    };
    chai.request(server)
      .delete(`/api/users/deleteUser`)
      .send(deleteUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.equal(`Deleted: (email: ${deleteUser.email})`);
        done();
      });
  });

  
  it('Verify that delete returns 404 if the user does not exist', (done) => {
    const deletedUser = {
      email: "valverdo@alberto.com",
      password: "random, since it does not matter"
    };
    chai.request(server)
      .delete(`/api/users/deleteUser`)
      .send(deletedUser)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.equal('User not found in database to delete account.');
        done();
      });
  });


  it('Verify that delete returns 400 if the request body is of the wrong format', (done) => {
    const deletedUser = {
      user_email: "valverdo@alberto.com",
      password: "random, since it does not matter"
    };
    chai.request(server)
      .delete(`/api/users/deleteUser`)
      .send(deletedUser)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.equal('Invalid inputs passed, please check your data.');
        done();
      });
  });


  // it('Verify that after deletion, there are 0 users in the database', (done) => {
    
  //   const getUsersFunction = async () => {
  //     User.find()
  //     .then((documents) => {
  //       console.log(documents)
  //       return documents
  //     })
  //     .catch((e) => {
  //       console.log(`Error at getting users in npm test. error is ${e}`)
  //       return e
  //     });
  //   }
  //   await expect(getUsersFunction()).should.be.a('array')
  // });
});


