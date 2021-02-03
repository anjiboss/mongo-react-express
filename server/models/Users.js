const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        min: 3
    },
    age: {
        type: String,
        required: true,
        min: 1
    },
    birthplace: {
        type: String,
        required: true,
        min: 3
    }
})

module.exports = mongoose.model("Users", userSchema)