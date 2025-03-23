const adminAuth =  (req,res,next)=>{
    let token = "krishna";
    let auth = token === "krishna";
    if(!auth){
        res.status(401).send()
    }else {
        next();
    }
};

const userAuth =  (req,res,next)=>{
    let token = "krishna";
    let auth = token === "krishna";
    if(!auth){
        res.status(401).send()
    }else {
        next();
    }
};


module.exports = { adminAuth};
