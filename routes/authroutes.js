const passport = require('passport');

// export a function from this file and assuming we call this function with the app object so we add it as an argument.
module.exports = (app) => {
    // handel the route when users navigate to /auth/google and hand them off to passort.
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'] // Tells google what information we want from users accout. we want their profile and email.
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));


    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });


    // arrow function will be called whenever someone visits this route.
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
};