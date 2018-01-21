//  Keys.js - Figure out which environment, dev or prod, you want to deploy to.

if (process.env.NODE_ENV === 'production') {
    // We are in production. Return the prod set of keys.
    module.exports = require('./prod');
} else {
    // We are in development. Return the dev keys.
    module.exports = require('./dev'); // pull in the dev keys and immediately pass to whoever is asking for them (module.export).
}