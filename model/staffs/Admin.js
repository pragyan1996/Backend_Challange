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
        }
    },
    {
        timestamps: true
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