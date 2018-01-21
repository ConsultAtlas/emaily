const mongoose = require('mongoose');
const { Schema } = mongoose; // This states that the mongoose object has a property called "schema". Take that property and 
                             // assign it to a new property called "Schema". This is called 'destructoring'.

const userSchema = new Schema ({
    googleId: String
});

mongoose.model('users', userSchema); // By using the 'mongoose.model()' command we are telling mongoose that we want to create a new
                                     // collection called 'users'. If mongoose boots up the data base and there is already a 'users'
                                     // collection, it will not delete it and recreate it. Mongoose will just know that it is the same thing.
                                     