const express = require('express');
const mongoose = require('mongoose')
const app = express()
const db = require('./config/mongoose')
const Todo = require('./model/todo');



app.set('view engine','ejs');
app.set('views','./views'); 

app.use(express.static('./assets'));

app.use(express.urlencoded({extended:true}));



// app.get('/', (req,res) => {
//     res.render('index')
// })

app.get("/", async(req, res) => {
   let allTodo = await Todo.find({})
    return res.render('index',{todo: allTodo
    })
})



app.post("/create-task", (req,res) => {
    console.log(req.body)
    const todo = new Todo({
        todo: req.body.todoValue,
        category: req.body.category,
        date: req.body.date
        
    })
    todo.save()
    .then(result =>{
        console.log(result)
       return res.redirect('/')
    })
})

app.post("/delete", async(req, res) => {
    console.log(req.body)
    let deleteTask = req.body.deleteValue;
        Todo.deleteMany({
            todo: deleteTask
        })
        .then(result => {
            return res.redirect('back')
        })
    })
 

 



app.listen(4000,console.log('server is running'));