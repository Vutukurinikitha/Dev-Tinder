const express = require("express");
const { validateProfileData} = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {userAuth} = require("../middlewares/auth");

const ProfileRouter = express.Router();

ProfileRouter.get("/profile", userAuth ,async (req,res) => {
  
    res.send(req.user)
});

ProfileRouter.patch("/profile/edit", async (req,res)=> {
    try{
        if(! validateProfileData(req)){
            throw new Error("Invalid edit Request");
        }

        const loggedInUser = req.user;
        Object.keys(req.body).forEach((key)=> (loggedInUser[key]= req.body[key]));
        await loggedInUser.save();
        //console.log(loggedInUser);
        res.json({"message":" edited API is successfull"});
    }catch(err){
        req.status(400).send("Error encountered"+ err.message);
    }
    
});


module.exports = ProfileRouter;
