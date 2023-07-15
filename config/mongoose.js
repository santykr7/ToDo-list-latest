const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/personal_todo');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting db'))

db.once('open', ()=> {  
    console.log('connected to db')
});

module.exports = db