const mongoose = require('mongoose');
const { Schema } = mongoose;

const academicYear = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        fromYear: {
            type: Date,
            required: true,
        },
        toYear: {
            type: Date,
            required: true,
        },
        isCurrent: {
            type: Boolean,
            required: false
        },
        createdby: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        students: [{
            type: Schema.Types.ObjectId,
            ref: "Student"
        }],
        teachers: [{
            type: Schema.Types.ObjectId,
            ref: "Teacher"
        }],
    },
    { timestamps: true }
);
const AcademicYear = mongoose.model("AcademicYear", academicYear);
module.exports = AcademicYear;