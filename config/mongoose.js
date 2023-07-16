const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://santykr7:D%40re2win@cluster0.vgannu9.mongodb.net/personal_todo');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting db'))

db.once('open', ()=> {  
    console.log('connected to db')
});

module.exports = db
