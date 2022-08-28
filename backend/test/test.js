var chai = require('chai');
var chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const User = require('../models/user');
var server = require('../server');

var expect = chai.expect;
var should = chai.should();

chai.use(chaiHttp);




before((done) => {
  User.deleteMany({}, (err) => {
    console.log("Some error trying to clean up test database BEFORE tests")
    console.log(err)
  });
  done();
});

after((done) => {
  User.deleteMany({}, (err) => {
    console.log("Some error trying to clean up test database AFTER tests")
    console.log(err)
  });
  done();
})



describe('Test API Routes', function () {
  
  it('tests a welcome route to check routing works', (done) => {
    chai.request(server)
      .get('/api/users/welcome')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");

        var actual = res.body.message
        var expected = "welcome!"
        expect(actual).to.be.equal(expected)
        // console.log(res.body.message)
        // console.log(array)
        done();
      });
  });
  
  // GET
  it('Verify that there are 0 users in the DB', (done) => {
    chai.request(server)
      .get('/api/users/getUsers')
      .end((err, res) => {
        // console.log("The res.body is:");
        // console.log(res.body);
        // console.log(res.body["users"]);
        res.should.have.status(200);
        res.body["users"].should.be.a('array');
        res.body["users"].length.should.be.equal(0);
        done();
      });
  });



  // POST
  it('Verify that signup works for new user', (done) => {

    let newUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com", //note that any caps in email will be made small cap so for testing purposes, use small cap for email
      password: "Mohammed"
    }

    chai.request(server)
      .post('/api/users/signup')
      .send(newUser)
      .end((err, res) => {
        // console.log("The res.body is:");
        // console.log(res.body);
        // console.log(res.body["users"]);
        res.should.have.status(201);
        res.body["user"].should.be.a('object');
        res.body["user"]["name"].should.be.equal(newUser["name"]);
        res.body["user"]["email"].should.be.equal(newUser["email"]);
        done();
      });
  });

  // POST
  it('Verify that existing user cannot sign up again', (done) => {

    let user = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Mohammed"
    }

    chai.request(server)
      .post('/api/users/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });


  // POST
  it('Verify that an existing user\'s password is updated', (done) => {

    let updatedUser = {
      name: "Valverdo",
      email: "valverdo@alberto.com",
      password: "Alfredo"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.equal("User password updated!");
        done();
      });
  });

  // POST
  it('Verify that if the user does not exist, the updatePassword adds a new user instead', (done) => {

    let updatedUser = {
      name: "Anderson",
      email: "hans@christian.com",
      password: "mermaid"
    }

    chai.request(server)
      .put('/api/users/updatePassword')
      .send(updatedUser)
      .end((err, res) => {
        res.should.have.status(201);
        res.body["user"].should.be.a('object');
        res.body["user"]["name"].should.be.equal(updatedUser["name"]);
        res.body["user"]["email"].should.be.equal(updatedUser["email"]);
        done();
      });
  });

  // DELETE
  it('Verify that delete works for existing user', (done) => {

    User.findOne({ email: "valverdo@alberto.com" })
      .then(existingUser => {
        chai.request(server)
          .delete(`/api/users/deleteUser/${existingUser.id}`)
          .end((err, res) => {
          
            const msg = `Deleted: (name: ${existingUser.name}, email: ${existingUser.email})`
          
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body["message"].should.be.equal(msg);
            done();
          });
      })

      .catch(err => {
        const error = new HttpError(
          'This should not happen since user is in database.',
          500
        );
        console.log(error)
        return next(error);
      })
  });


  // GET
  it('Verify that after deletion, there is still 1 user in the database', (done) => {
    chai.request(server)
      .get('/api/users/getUsers')
      .end((err, res) => {
        // console.log("The res.body is:");
        // console.log(res.body);
        // console.log(res.body["users"]);
        res.should.have.status(200);
        res.body["users"].should.be.a('array');
        res.body["users"].length.should.be.equal(1);
        done();
      });
  });

  // DELETE
  it('Verify that delete works for the last user', (done) => {

    User.findOne({ email: "hans@christian.com" })
      .then(existingUser => {
        chai.request(server)
          .delete(`/api/users/deleteUser/${existingUser.id}`)
          .end((err, res) => {
          
            const msg = `Deleted: (name: ${existingUser.name}, email: ${existingUser.email})`
          
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body["message"].should.be.equal(msg);
            done();
          });
      })

      .catch(err => {
        const error = new HttpError(
          'This should not happen since user is in database.',
          500
        );
        console.log(error)
        return next(error);
      })
  });
  



  /** THIS IS NOT WORKING...
  // DELETE
  it('Verify that delete throws an error if the user does not exist', (done) => {

    User.findOne({ email: "valverdo@alberto.com" })
      .then(result => {
        if (result) {
          const error = new HttpError(
            'This should not happen since user is in database.',
            500
          );
          console.log(error)
          return next(error);
        }

        chai.end((err, res) => {
          err.should.have.status(404);
          err.body.should.be.equal("User does not exist in database!");
          done();
        });

      })
  });
  */

});


