const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


// in serialiseUser, 'user' is a mongo user model instance. We turned it into an id (cookie)...
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// in deserializeUser, we take the id (cookie) and turn it back into a mongo user model instance.
// we will take that mongo user model instance, search through all our instance of users, and then when
// we find one, we will then return 'done' with that user.
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(

    // Creates a new GoogleStrategy, tells passport we want to use it, 
    // and adds parameters on how we want to authenticate our users with google
    // GoogleStrategy() needs a client ID and a client secret (provided by Google).
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser) {
                // We already have a given record with the user ID
                done(null, existingUser); // tells passport that we are done, that we have no error msg and then had off the existingUser.
            } else {
                // we do not have a user record with this ID, make a new record
                new User({ googleId: profile.id }).save() // creates a mongo model instance and then persists it to the database. 
                    .then(user => done(null, user));
            }
            })
    }
  )
);