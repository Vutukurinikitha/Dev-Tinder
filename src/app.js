//console.log("Krishna tho prayan modalu");

const express = require("express");
const app = express();

app.use("/herbs",(req, res) => {
    res.send("Krishna consiousness started");
})
app.listen(3020, ()=> {
    console.log("Krishna server started");
});
