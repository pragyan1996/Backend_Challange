const express = require("express");
const AdminRouter = express.Router();
const {
    deleteAdmin,
    suspendTeacher,
    unsuspendTeacher,
    withdrawTeacher,
    unwithdrawTeacher,
    publishExam,
    unpublishExam,
    registerAdmin,
    adminLogin,
    getAllAdmin,
    getSingleAdmin,
    updateAdmin,
} = require("../../controller/Staff/adminController");
const isLogin = require("../../middlewares/isLogin");

AdminRouter.post("/register", registerAdmin);

AdminRouter.post("/login", adminLogin);

AdminRouter.get("/", getAllAdmin);

AdminRouter.get("/:id",isLogin, getSingleAdmin);

AdminRouter.put("/:id", updateAdmin);

AdminRouter.delete("/:id", deleteAdmin);

AdminRouter.put("/suspend/teacher/:id", suspendTeacher);

AdminRouter.put("/unsuspend/teacher/:id", unsuspendTeacher);

AdminRouter.put("/withdraw/teacher/:id", withdrawTeacher);

AdminRouter.put("/unwithdraw/teacher/:id", unwithdrawTeacher);

AdminRouter.put("/publish/exam/:id", publishExam);

AdminRouter.put("/unpublish/exam/:id", unpublishExam);

module.exports = AdminRouter;
