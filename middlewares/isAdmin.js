const Admin = require("../model/staffs/Admin");

const isAdmin = async (req, res, next)=>{
    const user = req.userAuth;
    console.log('-->',user);
    if (user.role == 'admin') {
        next();
    }
    else {
        next(new Error("Access denied, admins only."))
    }
}

module.exports = isAdmin;