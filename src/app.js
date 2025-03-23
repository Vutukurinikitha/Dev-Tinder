//console.log("Krishna tho prayan modalu");

const express = require("express");
const app = express();
const {adminAuth} = require("./middlewares/auth")

app.use("/admin", adminAuth);
app.use("/admin", (req,res,next)=>{
   console.log("Route handler user");

   next();
//    res.send("Route handler user 1");

},
(req,res)=>{
    res.send("Route handler user 2",200);
}
);

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
app.listen(3020, ()=> {
    console.log("Krishna server started");
});
