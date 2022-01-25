const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    sureName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    password: {
        type: String,
        required: false,
        minlength: 5
    },
    mobileNumber: {
        type: String,
        default: "",
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['CUSTOMER SERVICE', 'ADMIN', "SUPER AGENT", "ONLINE MUSTER AGENT"],
        required: true
    },
    reating: {
        type: Number,
        default: 0,
        required: true
    },
    agentId: {
        type: String,
        default: "",
        unique: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);