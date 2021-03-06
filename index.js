const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/user');
require('./models/survey');
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

app.use(bodyParser.json());
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


require('./routes/authroutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Making sure that express will serve up production assets
    app.use(express.static('client/build'));
    // Making sure that express will serve up the index.html file if it doesnt recognize the route.
    
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Set the port to be assigned by heroku but booleaned it to start on 5000
// if we havent gotten anything from heroku.
const PORT = process.env.PORT || 5000;
app.listen(PORT);