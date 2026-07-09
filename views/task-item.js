module.exports = function(task){


return `

<div class="task-card">


<div class="task-left">


<div class="task-icon">

✓

</div>



<div>


<h3>

${task.title}

</h3>


<span>

Created just now

</span>


</div>


</div>





<div class="task-actions">


<button

class="edit-btn"

hx-get="/tasks/${task.id}/edit"

hx-target="#task-${task.id}"

hx-swap="outerHTML"

>

✏️ Edit

</button>





<button

class="delete-btn"


hx-delete="/tasks/${task.id}"


hx-target="#task-container"


hx-swap="innerHTML"


hx-confirm="Delete this task?"


>

🗑 Delete

</button>



</div>


</div>

`;

};