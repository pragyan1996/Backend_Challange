const jwt = require("jsonwebtoken");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
    //get token from header
    const headerObj = req.headers;
    console.log(headerObj);
    //verify the token
    let verify = verifyToken(headerObj.authorization.split(" ")[1]);
    console.log(verify);
    if (!verify) {
        let err = new Error("Invalid token");
        next(err);
    } else {
        req.userAuth = verify;
        // return verify;
        next();
    }
    //save the user into req obj
};

const auth = (req, res, next) => {};

module.exports = isLogin;
