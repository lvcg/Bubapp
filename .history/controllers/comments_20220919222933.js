const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      //TODO: ADD NEW PROPERTIES TO EACH DOCUMENT
        //const commentUser = await User.findById(req.user.id);
        await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        createdById: req.user.id,
        createdByName: req.user.userName,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComments: async (req, res) => {
    try {
      await Comment.dele(req.params.id);
      console.log("Comment has been deleted!");
      res.redirect("/post/"+req.params.postId);
    } catch (err) {
      console.log(err);
    }
  }
};
