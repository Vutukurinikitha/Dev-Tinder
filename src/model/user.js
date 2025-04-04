const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        type : Number,
       
    },
    gender : {
        type : String,
        enum : {
            values : ["male", "female", "others"],
            message : `{VALUE} is not a valid gender type`
        },
        // validate(value){
        //     if(! ["male","female", "others"].includes(value)){
        //         throw new Error("Gender is not valid value");
        //     }
        // }
    },
    skills : {
        type : [String]
    }
});

userSchema.methods.getJWT = async function (){
    const user = this;
     await jwt.sign({_id : user._id}, "Dev@9900"); 
}

userSchema.methods.validatePassword = async function(password){
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(password, passwordHash);

    return isPasswordValid;
}
const User =  mongoose.model("User", userSchema);

module.exports = {User};