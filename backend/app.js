const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/users', usersRoutes);

//Delete if not using
app.get('/api/users/welcome', (req, res) => {
  res.status(200).send({
    message: "welcome!"
  });
});

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const mongodbUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ypl7pl9.mongodb.net/${process.env.MONGODB_CLUSTER}?retryWrites=true&w=majority`
console.log(mongodbUrl)

mongoose.connect(
  mongodbUrl
)
.then(() => {
    console.log("Successfully connected to MongoDB Atlas!")
})
.catch(err => {
    console.log("Failed to log into MongoDB Atlas. Error below.")
    console.log(err);
});

module.exports = app;
