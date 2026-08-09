const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    breed: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;