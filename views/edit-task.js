module.exports=function(task){


return `


<div

class="task-card edit-card"

id="task-${task.id}"

>



<form

class="edit-form"


hx-post="/tasks/${task.id}"


hx-target="#task-${task.id}"


hx-swap="outerHTML"


>


<input


name="title"


value="${task.title}"


autofocus


>



<button>

Save

</button>



<button


type="button"


class="cancel-btn"


hx-get="/tasks"


hx-target="#task-container"


hx-swap="innerHTML"


>

Cancel

</button>


</form>



</div>


`;

};