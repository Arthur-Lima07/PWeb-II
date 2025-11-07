const Comment = require('../models/Comment');


exports.createComment = async (req, res) => {
    try {
        const { text, postId, userId } = req.body;
        if (!text || !postId) return res.status(400).json({ message: 'texto e postId são obrigatórios' });


        const comment = new Comment({ text, postId, user: userId });
        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao criar comentário' });
    }
};


exports.getCommentsByPost = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId }).sort({ createdAt: -1 }).populate('user', 'username');
        res.json(comments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao buscar comentários' });
    }
};