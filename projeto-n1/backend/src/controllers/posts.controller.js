const Post = require('../models/Post');


exports.createPost = async (req, res) => {
try {
const { title, text, userId } = req.body;
if (!title || !text) return res.status(400).json({ message: 'Título e texto são obrigatórios' });


if (!userId) return res.status(400).json({ message: 'userId é necessário (simples auth)' });


const post = new Post({ title, text, user: userId });
await post.save();
res.status(201).json(post);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Erro ao criar post' });
}
};


exports.getAllPosts = async (req, res) => {
try {
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;


const [posts, total] = await Promise.all([
Post.find().sort({ createdAt: -1 }).skip(skip).limit(limit).populate('user', 'username'),
Post.countDocuments()
]);


res.json({ posts, total, page, pages: Math.ceil(total / limit) });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Erro ao buscar posts' });
}
};


exports.getPostById = async (req, res) => {
try {
const post = await Post.findById(req.params.id).populate('user', 'username');
if (!post) return res.status(404).json({ message: 'Post não encontrado' });
res.json(post);
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Erro ao buscar post' });
}
};