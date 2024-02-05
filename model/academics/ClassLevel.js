const mongoose = require('mongoose');
const { Schema } = mongoose;

const classLevel = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        createdby: {
            type: Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: "Student",
            }
        ],
        subjects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Subject",
            }
        ],
        teachers: [
            {
                type: Schema.Types.ObjectId,
                ref: "Teacher"
            }
        ]
    },
    { timestamps: true }
);
const ClassLevel = mongoose.model("classLevel", classLevel);
module.exports = ClassLevel;