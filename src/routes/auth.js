const express = require("express");
const { validateSignUpData} = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {userAuth} = require("../middlewares/auth");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res)=> {
    
    try{
        //validate signUp Data
       
        //validateSignUpData(req);
        const {firstName, lastName, emailId , password} = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        console.log(passwordHash);
        //Creatig an new User instance for this API
        
        const userModel = new User({
            firstName,
            lastName,
            emailId,
            password : passwordHash
        });
        await userModel.save();

        res.send("User added success !!");
    }catch(err){
        res.status(500).send(err);
    }
    
});

authRouter.post("/login", async (req, res) => {
    try{
        const {emailId, password} = req.body;
        let user = await  User.findOne({emailId : emailId});
        if(! user ){
            throw new Error("EmailID is not present");
        }
        //if(validator.isEmail(emailId))
        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid){

            //creat a JWT token
            const token = user.getJWT();
            //add a cookie
            console.log((token))
            res.cookie("token",token);
            res.send("LoginSuccess");
        }else{
            throw new Error(" Login fails");
        }
    }catch(err){
        res.status(400).send("Error :" + err.message);
    }
})
authRouter.post("/logout", async (req,res) => {
    //validateSignUpData(req);
    res.cookie("token", null,{
        expires :new Date(Date.now()),
    });
    res.send("Logged Out");

});

module.exports = authRouter;
