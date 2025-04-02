//console.log("Krishna tho prayan modalu");

const express = require("express");
const app = express();
const connectDB = require("./config/database");
const {adminAuth} = require("./middlewares/auth")
const User = require("./model/user");
const { validateSignUpData} = require("./utils/validator");
const bcrypt = require("bcrypt");

connectDB().then(()=>{
    console.log("Db is connected");
    app.listen(3020, ()=> {
        console.log("Krishna server started");
    });

}).catch((err)=> {
    console.log("Db is not connected", err);
});
app.use(express.json())
app.post("/signup", async (req, res)=> {
    
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

app.post("/login", async (req, res) => {
    try{
        const {emailId, password} = req.body;
        let user = await  User.findOne({emailId : emailId});
        if(! user ){
            throw new Error("EmailID is not present");
        }
        //if(validator.isEmail(emailId))
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(isPasswordValid){
            res.send("LoginSuccess");
        }else{
            throw new Error(" Login fails");
        }
    }catch(err){
        res.status(400).send("Error :" + err.message);
    }
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



