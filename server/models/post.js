const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {type: String, required:true},
    creator: {type: mongoose.Schema.ObjectId, ref: "User" },
    dateCreated: {type: Date, default: Date.now},
    content: {type: String, required:true},
    isLiked:[{type: mongoose.Schema.ObjectId, ref: "User" }],
    isDisliked:[{type: mongoose.Schema.ObjectId, ref: "User" }],
})

module.exports = mongoose.model("Post", postSchema)