const express = require("express");
const path = require("path");

const renderTasks = require("./views/tasks");
const renderTaskItem = require("./views/task-item");
const renderEditTask = require("./views/edit-task");
const renderEmptyState = require("./views/empty-state");


const app = express();

const PORT = 3000;



// Middleware

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);



// Temporary database

let tasks = [

    {
        id: 1,

        title: "Learn HTMX",

        priority: "high",

        dueDate:
            "2026-07-15T20:00",

        createdAt:
            new Date(),

        completed: false

    },


    {
        id: 2,

        title: "Build Task Manager",

        priority: "medium",

        dueDate:
            "2026-07-20T18:30",

        createdAt:
            new Date(),

        completed: false

    }

];



// Generate ID

function generateId(){

    return Date.now();

}



// ============================
// HOME PAGE
// ============================

app.get("/", (req,res)=>{


    res.send(`

<!DOCTYPE html>

<html>


<head>

<title>
HTMX Task Manager
</title>


<link

rel="stylesheet"

href="/style.css"

/>


<script

src="https://unpkg.com/htmx.org@2.0.4">

</script>


</head>



<body>


<div class="container">


<h1>

⚡ HTMX Task Manager

</h1>



<form

hx-post="/tasks"

hx-target="#task-container"

hx-swap="innerHTML"

class="task-form"


>


<input

type="text"

name="title"

placeholder="Create a new task..."

required

>



<input

type="datetime-local"

name="dueDate"

>



<select name="priority">


<option value="low">

🟢 Low

</option>


<option value="medium" selected>

🟡 Medium

</option>


<option value="high">

🔴 High

</option>


</select>



<button>

Add Task

</button>



</form>




<div

id="task-container"

>


${

tasks.length

?

renderTasks(tasks)

:

renderEmptyState()

}


</div>



</div>



</body>


</html>

`);

});





// ============================
// CREATE TASK
// ============================

app.post("/tasks",(req,res)=>{


const task={


id:
generateId(),


title:
req.body.title,


priority:
req.body.priority || "medium",


dueDate:
req.body.dueDate || null,


createdAt:
new Date(),


completed:false


};



tasks.unshift(task);



res.send(
    renderTasks(tasks)
);


});





// ============================
// SEARCH
// ============================

app.get("/tasks/search",(req,res)=>{


const keyword =
(req.query.q || "")
.toLowerCase();



const filtered =
tasks.filter(task =>

task.title
.toLowerCase()
.includes(keyword)

);



res.send(

filtered.length

?

renderTasks(filtered)

:

renderEmptyState()

);


});





// ============================
// EDIT FORM
// ============================

app.get("/tasks/:id/edit",(req,res)=>{


const task =
tasks.find(

t =>
t.id ==
req.params.id

);



if(!task)
return res.sendStatus(404);



res.send(

renderEditTask(task)

);


});





// ============================
// UPDATE TASK
// ============================

app.put("/tasks/:id",(req,res)=>{


const task =
tasks.find(

t =>
t.id ==
req.params.id

);



if(!task)
return res.sendStatus(404);



task.title =
req.body.title;


task.priority =
req.body.priority;


task.dueDate =
req.body.dueDate;



res.send(

renderTaskItem(task)

);


});





// ============================
// SINGLE TASK VIEW
// ============================

app.get("/tasks/:id",(req,res)=>{


const task =
tasks.find(

t =>
t.id ==
req.params.id

);



if(!task)
return res.sendStatus(404);



res.send(

renderTaskItem(task)

);


});





// ============================
// COMPLETE / UNDO
// ============================

app.post("/tasks/:id/complete",(req,res)=>{


const task =
tasks.find(

t =>
t.id ==
req.params.id

);



if(task){

task.completed =
!task.completed;

}



res.send(

renderTasks(tasks)

);


});





// ============================
// DELETE TASK
// ============================

app.delete("/tasks/:id",(req,res)=>{


tasks =

tasks.filter(

task =>
task.id != req.params.id

);



res.send(

tasks.length

?

renderTasks(tasks)

:

renderEmptyState()

);


});





app.listen(PORT,()=>{


console.log(

`HTMX Task Manager running on http://localhost:${PORT}`

);


});