const registerAdmin = (req, res) => {
    console.log('here');
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin has been registered'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const adminLogin = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin has been loggedin'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const getAllAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Get all admins'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
}

const getSingleAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Single admin'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const updateAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Update admin'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const deleteAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin deleted successfully.'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const suspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin suspend teacher'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const unsuspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin unsuspend teacher'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const withdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin withdraw teacher'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const unwithdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin unwithdraw teacher'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const publishExam = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin publish exam'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
};

const unpublishExam = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: 'Admin unpublish exam'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message
        });
    }
}

module.exports = {
    registerAdmin,
    adminLogin,
    getAllAdmin,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin,
    suspendTeacher,
    unsuspendTeacher,
    withdrawTeacher,
    unwithdrawTeacher,
    publishExam,
    unpublishExam
}