const express = require("express");

const app = express();

const PORT = 3000;


// Middleware

app.use(express.urlencoded({
    extended:true
}));

app.use(express.static("public"));


// Import HTML generators

const renderTasks = require("./views/tasks");
const renderTaskItem = require("./views/task-item");
const renderEditTask = require("./views/edit-task");
const renderEmpty = require("./views/empty-state");



// Fake database

let tasks = [

    {
        id:1,
        title:"Learn HTMX",
        completed:false
    },

    {
        id:2,
        title:"Build CRUD Demo",
        completed:false
    },

    {
        id:3,
        title:"Prepare Presentation",
        completed:false
    }

];



// Home page

app.get("/",(req,res)=>{

    res.sendFile(
        __dirname + "/public/index.html"
    );

});




// GET TASKS

app.get("/tasks",(req,res)=>{

    const query=req.query.search || "";


    let filtered =
        tasks.filter(task =>
            task.title
            .toLowerCase()
            .includes(query.toLowerCase())
        );


    if(filtered.length===0){

        return res.send(renderEmpty());

    }


    res.send(
        renderTasks(filtered)
    );

});




// CREATE TASK

app.post("/tasks",(req,res)=>{


    const task={

        id:Date.now(),

        title:req.body.title,

        completed:false
    };


    tasks.push(task);


    res.send(
        renderTasks(tasks)
    );

});




// DELETE TASK

app.delete("/tasks/:id",(req,res)=>{


    tasks =
    tasks.filter(
        task =>
        task.id != req.params.id
    );


    if(tasks.length===0){

        return res.send(renderEmpty());

    }


    res.send(
        renderTasks(tasks)
    );

});




// EDIT FORM

app.get("/tasks/:id/edit",(req,res)=>{


    const task =
    tasks.find(
        t=>t.id==req.params.id
    );


    res.send(
        renderEditTask(task)
    );


});




// UPDATE TASK

app.post("/tasks/:id",(req,res)=>{


    const task =
    tasks.find(
        t=>t.id==req.params.id
    );


    task.title=req.body.title;



    res.send(
        renderTaskItem(task)
    );


});




// SEARCH

app.get("/search",(req,res)=>{

    const query=req.query.q || "";


    const filtered =
    tasks.filter(
        t =>
        t.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );


    if(filtered.length===0)
    {
        return res.send(
            renderEmpty()
        );
    }


    res.send(
        renderTasks(filtered)
    );


});





app.listen(PORT,()=>{

    console.log(
        `🚀 HTMX app running at http://localhost:${PORT}`
    );

});