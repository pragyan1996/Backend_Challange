const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin",
        },
        academicTerms: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AcademicTerm",
            },
        ],
        academicYear: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AcademicTerm",
            },
        ],
        classLevel: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ClassLevel",
            },
        ],
        teachers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher",
            },
        ],
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Students",
            },
        ],
    },
    {
        timestamps: true,
    }
);

adminSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    console.log('salt --> ', salt);
    this.password = await bcrypt.hash(this.password, salt);
});

const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;