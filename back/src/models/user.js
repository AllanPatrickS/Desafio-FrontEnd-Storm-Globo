require('mongoose-type-email');
const mongoose = require("mongoose"),
    modelName = "User",
    model = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true
        },
        rules: {
            type: Number,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        }
    }, { timestamps: true });
model.index({'$**': 'text'});
modelInstance = mongoose.model(modelName, model);

module.exports = modelInstance;