const mongoose = require('mongoose');


const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB conectado');
    } catch (err) {
        console.error('Erro ao conectar MongoDB', err.message);
        throw err;
    }
};


module.exports = connectDB;