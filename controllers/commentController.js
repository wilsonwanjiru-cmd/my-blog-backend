const Comment = require('../models/Comment');

// Save new comment
exports.createComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.status(201).json({ message: 'Comment saved!', comment: newComment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all comments
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
