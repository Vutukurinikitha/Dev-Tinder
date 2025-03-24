//console.log("Krishna tho prayan modalu");

const express = require("express");
const app = express();
const connectDB = require("./config/database");
const {adminAuth} = require("./middlewares/auth")
const User = require("./model/user");


connectDB().then(()=>{
    console.log("Db is connected");
    app.listen(3020, ()=> {
        console.log("Krishna server started");
    });

}).catch((err)=> {
    console.log("Db is not connected", err);
});

app.post("/signup", async (req, res)=> {
    const userModel = new User({
        firstName : "Nikitha",
        lastName : "Vutukuri",
        emailId : "nikki@gmail.com",
        password : "krishna",
        age : 28,
        gender : 'female'
    });
    try{
        await userModel.save();

        res.send("User added success !!");
    }catch(err){
        res.status(500).send("some error Encountered");
    }
    
});
//Creating new Instance of User Model



// app.use("/admin", adminAuth);
// app.use("/admin", (req,res,next)=>{
//    console.log("Route handler user");

//    next();
// //    res.send("Route handler user 1");

// },
// (req,res)=>{
//     res.send("Route handler user 2",200);
// }
// );

// app.use works in all cases, specify with type you get exactly same one
// app.get("/tulas*i",(req, res) => {
//     res.send("Krishna consiousness started herbs tulasi");
// });
// app.post("/tulasi",(req, res) => {
//     res.send("Data saves succesfully");
// })
// app.use("/herbs",(req, res) => {
//     res.send("Krishna consiousness started");
// })
// app.use("/",(req, res) => {
//     res.send("Krishna consiousness started herbs");
// })
// app.get("/userDetails",(req, res)=>{
//     try{

//     }catch{

//     }
// });
// app.use("/", (err,req,res,next)=>{
//     if(err){
//         res.status(500).send("It encounters error");
//     }
// })



