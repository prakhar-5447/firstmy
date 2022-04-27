const mongoose = require('mongoose');
const { Schema } = mongoose;

const childSchema = new Schema({
    org: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'org'
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('child', childSchema);