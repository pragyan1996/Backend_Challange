const AsyncHandler = require("express-async-handler");
const Admin = require("../../model/staffs/Admin");
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generate");

/**
 *
 * @param {*} req: required
 * @param {*} res: required for response
 * @description: Api for new admin registration
 * @URL POST /admin/register
 */
const registerAdmin = AsyncHandler(async (req, res) => {
    console.log("here");
    console.log(req.body);
    const { name, email, password } = req.body;
    const check = await Admin.findOne({ email });
    if (check) {
        return res.json({ message: "Admin already exists." });
    }
    console.log(check);
    const user = await Admin.create({
        name,
        email,
        password,
    });
    res.json({
        status: "success",
        data: user,
        message: "Admin registered successfully.",
    });
});

const verifyPassword = async function (enteredPass, dbpass) {
    return await bcrypt.compare(enteredPass, dbpass);
};

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await Admin.findOne({ email });
        console.log(user);
        if (!user) {
            console.log('here');
            return res.json({ message: "Invalid login credentials." });
        }

        if (user && (await verifyPassword(password, user.password))) {
            let token = generateToken(user);

            return res.json({
                message: "Admin logged in successfully.",
                token,
            });
        } else {
            return res.json({ message: "Invalid login credentials." });
        }
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const getAllAdmin = AsyncHandler(async (req, res) => {
    try {
        let admins = await Admin.find();
        return res.json({
            status: "success",
            message: "Admins fetched successfully.",
            data: admins
        })
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
})

const getAdminProfile = AsyncHandler(async (req, res) => {
    // console.log('-->',req.userAuth);
    try {
        let userdata = req.userAuth;
        let userData = await Admin.findById(userdata._id);
        res.status(201).json({
            status: "success",
            data: userData,
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
});

const updateAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password);
        const checkEmail = await Admin.findOne({ email });
        console.log(checkEmail);
        if (checkEmail) {
            return res.status(201).json({
                status: "failed",
                message: "This email is already taken"
            });
        }
        else {
            let data = await Admin.findByIdAndUpdate(req.userAuth._id, {
                name, email, password
            });
            return res.status(201).json({
                status: "success",
                data,
                message: "Admin updated successfully."
            });
        }
        
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const deleteAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin deleted successfully.",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const suspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin suspend teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const unsuspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin unsuspend teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const withdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin withdraw teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const unwithdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin unwithdraw teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const publishExam = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin publish exam",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

const unpublishExam = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "Admin unpublish exam",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

module.exports = {
    registerAdmin,
    adminLogin,
    getAllAdmin,
    getAdminProfile,
    updateAdmin,
    deleteAdmin,
    suspendTeacher,
    unsuspendTeacher,
    withdrawTeacher,
    unwithdrawTeacher,
    publishExam,
    unpublishExam,
};
