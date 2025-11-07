require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 4000;


connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/twitter-n1')
.then(() => {
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
})
.catch(err => console.error('Erro na inicialização:', err));