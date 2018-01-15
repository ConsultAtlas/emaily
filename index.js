const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Creates a new GoogleStrategy, tells passport we want to use it, 
// and adds parameters on how we want to authenticate our users with google
// GoogleStrategy() needs a client ID and a client secret (provided by Google).

// clientID: 	161915244776-ta46c8iqeishu79qhem80m5qp129tb98.apps.googleusercontent.com
// clientSecret: d3-PZIx781jFmSjrgzC0Z4rD
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);