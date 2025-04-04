const { JsonWebTokenError } = require("jsonwebtoken");
const {jwt} = require("jsonwebtoken");
const User = require("../model/user");
const adminAuth =  (req,res,next)=>{
    let token = "krishna";
    let auth = token === "krishna";
    if(!auth){
        res.status(401).send()
    }else {
        next();
    }
};

// const userAuth =  (req,res,next)=>{
//     let token = "krishna";
//     let auth = token === "krishna";
//     if(!auth){
//         res.status(401).send()
//     }else {
//         next();
//     }
// };

const userAuth =  async (req,res,next)=>{
   try{
    const {token} = req.cookies;
    if(!token){
        throw new Error("Token not valid");
    }

    const decodedObj = await jwt.verify(token, "Dev@9900");

    const {_id} = decodedObj;
    const user = await User.findById(_id);
    if(! user){
        throw new Error("User not present");
    }
    req.user = user;
    next();
   }catch(err){
        res.status(400).send("Error: "+ err.message);
   }
    // Read the token
   
};

module.exports = { adminAuth, userAuth};
