let mongoose = require('mongoose');

let connectDB = async () => {
   await  mongoose.connect(
    "mongodb+srv://MagicalHerbs:YTWkLOoosSSGLRhy@magicalherbs.rx9dw.mongodb.net/DevTinder"
    );
};

module.exports = connectDB;
