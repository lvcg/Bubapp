const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      //TODO: ADD NEW PROPERTIES TO EACH DOCUMENT
        const post = await Post.findById(req.params.id);
        await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
        createdById: req.user.id,
        createdByName: req.user.username,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
};
