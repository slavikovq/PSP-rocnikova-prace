const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: { type: String, unique: true, required: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    password: {type: String, required: true},
    pfp: {type: String, default: null},
    role:{type: String, enum:["user", "admin"], default:"user"},
    dateCreated: {type: Date, default: Date.now}
})

module.exports = mongoose.model("User", userSchema);