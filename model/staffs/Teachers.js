const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    dateEmployed: {
        type: Date,
        default: new Date()
    },
    teacherId: {
        type: String,
        required: true,
        default: function () {
            return (
                "TEA" +
                Math.floor(100 + Math.random() * 900) +
                Date.now().toString().slice(2, 4) +
                this.name
                    .split(" ")
                    .map(name => name[0])
                    .join()
                    .toUpperCase()
            );
        },
    },
    isWithdrawn: {
        type: Boolean,
        default: false
    },
    isSuspended: {
        type: Boolean,
        default: false
    },
    role: {
        type: "String",
        default: "teacher"
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },
    applicationStatus: {
        type: String,
        enum: ["pending", 'approved', 'rejected'],
        default: "pending"
    },
    program: {
        type: Schema.Types.ObjectId,
        ref: "Program",
        required: true
    },
    classLevel: {
        type: Schema.Types.ObjectId,
        ref: "ClassLevel",
        required: true
    },
    academicYear: {
        type: Schema.Types.ObjectId,
        ref: "AcademicYear",
        required: true,
    },
    examsCreated: [{
        type: Schema.Types.ObjectId,
        ref: "Exam"
    }]
})