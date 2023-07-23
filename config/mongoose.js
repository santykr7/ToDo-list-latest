const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://santykr7:test123@cluster0.vgannu9.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting db'))

db.once('open', ()=> {  
    console.log('connected to db')
});

module.exports = db
