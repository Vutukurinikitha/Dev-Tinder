const validator = require("validator");
const validateSignUpData = (req) => {
    const { firstName, lastName , emailId, password} = req.body;

    if(! firstName || ! lastName){
        throw new Error("Name is not valid");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Emailid  is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Name is not Strong password");
    }

};

const validateProfileData = (req)=>{
    const allowedFields = ["firstName", "lastName", "skills","age"];
    const isAllowed = Object.keys(req.body).every(filed => allowedFields.includes(filed));
    return isAllowed;
}

module.exports = {
    validateSignUpData,validateProfileData
}

