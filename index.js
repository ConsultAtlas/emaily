const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

// Initialize cookies in the app.
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

// Tell express to use cookies to identify users.
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

// Set the port to be assigned by heroku but booleaned it to start on 5000
// if we havent gotten anything from heroku.
const PORT = process.env.PORT || 5000;
app.listen(PORT);