const express = require("express");
const { validateSignUpData} = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {userAuth} = require("../middlewares/auth");
const ConnectionRequest = require("../model/connectionRequest");
const { User } = require("../model/user");
const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async(req,res)=> {
    console.log("connection is sending");

    res.send("Connection Request send");

});
requestRouter.post("/request/send/:status/: userid", userAuth, async(req,res)=> {
   
    try{
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

        const statusCheckAccepted = ["interested", "ignored"];

        if(! statusCheckAccepted.inclused(status)){
            return 
            res.status(400).json({message :"status is not valid"});
        }
        //Checking is exising ID
        const toUser = await User.findByID(toUserId);
        if(! toUser){
            throw new Error("User is not present");
        } 
        
        //if connection sending again
        const existingConnectionRequest = await ConnectionRequest.findOne({
            $or : [
                {fromUserId , toUserId},
                {
                    fromUserId : toUserId, toUserId : fromUserId
                }
            ]
        });
        if(existingConnectionRequest){
            throw new Error("Connection request already exist");
        }
      
        const ConnectionRequest = new ConnectionRequest({
            fromUserId,
            toUserId,
            status
        });

        const data = ConnectionRequest.save();

        res.json({
            message : req.user.firstName + " "+ status +" "+  toUser.firstName,
            data
        })

    }catch(err){
        res.status(400).send("Error encountered in connecting request "+ err.message);
    }
});

module.exports = requestRouter