const mongoose = require("mongoose"),
    modelName = "meeting",
    model = new mongoose.Schema({
        date: {
            type: Date,
            required: true,
            validate: function (v) {
                return (v - new Date()) >= 0;
            },
        }
    }, { timestamps: true });
model.index({ date: 1 }, { expireAfterSeconds: 0 });
modelInstance = mongoose.model(modelName, model);

module.exports = modelInstance;