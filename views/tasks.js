const renderTaskItem = require("./task-item");


module.exports = function(tasks){


return `

<div class="task-header">

    <div>

        <h2>
            Your Tasks
        </h2>

        <p>
            ${tasks.length} 
            ${tasks.length === 1 ? "task" : "tasks"}
            available
        </p>

    </div>


    <div class="count-badge">

        ${tasks.length}

    </div>


</div>



<div class="tasks-list">

${

tasks.map(task =>
    renderTaskItem(task)
).join("")

}

</div>


`;

};