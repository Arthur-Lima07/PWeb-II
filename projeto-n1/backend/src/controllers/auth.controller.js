const User = require('../models/User');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
try {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ message: 'username e password obrigatórios' });


const exists = await User.findOne({ username });
if (exists) return res.status(400).json({ message: 'username já existe' });


const user = new User({ username, password });
await user.save();


const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
res.status(201).json({ token, user: { id: user._id, username: user.username } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Erro no servidor' });
}
};


exports.login = async (req, res) => {
try {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ message: 'username e password obrigatórios' });


const user = await User.findOne({ username });
if (!user) return res.status(400).json({ message: 'Credenciais inválidas' });


const matched = await user.comparePassword(password);
if (!matched) return res.status(400).json({ message: 'Credenciais inválidas' });


const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
res.json({ token, user: { id: user._id, username: user.username } });
} catch (err) {
console.error(err);
res.status(500).json({ message: 'Erro no servidor' });
}
};