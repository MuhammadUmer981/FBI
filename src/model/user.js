const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    creditCardNumber: {
        type: String,
        required: true,
    },
    creditCardExpiry: {
        type: String,
        required: true,
    },
    creditCardCVC: {
        type: String,
        required: true,
    },
    images: [{ type: String }],
    otp: { type: String },
    otpExpires: { type: Date },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
