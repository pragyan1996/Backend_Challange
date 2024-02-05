const mongoose = require('mongoose');
const { Schema } = mongoose;

const yearGroup = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        createdby: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        academicYear: {
            type: Schema.Types.ObjectId,
            ref: "AcademicYear",
            required: true
        }
    },
    { timestamps: true }
);
const YearGroup = mongoose.model("YearGroup", yearGroup);
module.exports = YearGroup;