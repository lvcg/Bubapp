const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdByName: {
    type: String,
    ref
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);