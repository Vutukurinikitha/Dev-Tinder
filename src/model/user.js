const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        unique : true
    },
    lastName :{
        type : String
    },
    emailId : {
        type : String,
        required : true,
        validate(value){
            if(! validator.isEmail(value)){
                throw new Error("Invalid emailID" + value);
            }

        }
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    gender : {
        type : String,
        validate(value){
            if(! ["male","female", "others"].includes(value)){
                throw new Error("Gender is not valid value");
            }
        }
    },
    skills : {
        type : [String]
    }
});

const User =  mongoose.model("User", userSchema);

module.exports = User;