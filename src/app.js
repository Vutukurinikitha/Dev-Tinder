//console.log("Krishna tho prayan modalu");

const express = require("express");
const app = express();
const connectDB = require("./config/database");
const {adminAuth} = require("./middlewares/auth")
const User = require("./model/user");
const { validateSignUpData} = require("./utils/validator");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userAuth} = require("./middlewares/auth");

const authRouter = require("./routes/auth");
const ProfileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");

app.use("/", authRouter);
app.use("/", ProfileRouter);
app.use("/", requestRouter);

connectDB().then(()=>{
    console.log("Db is connected");
    app.listen(3020, ()=> {
        console.log("Krishna server started");
    });

}).catch((err)=> {
    console.log("Db is not connected", err);
});
app.use(express.json());
app.use(cookieParser());

app.get("/feed", async(req,res) => {
    //const userModel = new User();
    try {
        let result = await  User.find({});
        res.send(result);
    }catch(err){
        res.status(500).send("some error Encountered");
    }
});

app.delete("/UserDelete", async (req,res)=> {
    console.log(req.body.id);
    let user = await User.findByIdAndDelete(req.body.id)
    res.send("User Deleted Succesfully");

})
app.patch("/UserUpdate", async (req,res)=> {
    console.log(req.body.id);
    let user = await User.findByIdAndUpdate(req.body.id, { "firstName" : "Krishna"},
        {
            returnDocument : 'after',
            runValidators : true
        }
     );
    res.send("User Upated Succesfully");

})



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



