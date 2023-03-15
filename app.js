const path = require('path');

const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // path views is folder contains ejs

app.use(express.static('public')); // public folder serves staticly
app.use(express.urlencoded({ extended: false })); // for handling data attached to request

app.use(authRoutes);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });
