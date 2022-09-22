const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  post: {
    
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);