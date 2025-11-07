const express = require('express');
const cors = require('cors');


const authRoutes = require('./routes/auth.routes');
const postsRoutes = require('./routes/posts.routes');
const commentsRoutes = require('./routes/comments.routes');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);


app.get('/', (req, res) => res.json({ message: 'API Twitter N1 ativa' }));


module.exports = app;