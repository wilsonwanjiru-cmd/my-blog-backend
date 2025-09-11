const express = require('express');
const router = express.Router();
const { createComment, getComments } = require('../controllers/commentController');

router.post('/store-comment', createComment);
router.get('/comments', getComments);

module.exports = router;
