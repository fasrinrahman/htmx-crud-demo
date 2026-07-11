const renderTaskItem = require("./task-item");

function getStatistics(tasks) {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.completed).length;

  const pending = tasks.filter((task) => !task.completed).length;

  const now = new Date();

  const overdue = tasks.filter((task) => {
    if (!task.dueDate || task.completed) return false;

    return new Date(task.dueDate) < now;
  }).length;

  const dueToday = tasks.filter((task) => {
    if (!task.dueDate) return false;

    const due = new Date(task.dueDate);

    return (
      due.getDate() === now.getDate() &&
      due.getMonth() === now.getMonth() &&
      due.getFullYear() === now.getFullYear()
    );
  }).length;

  return {
    total,
    completed,
    pending,
    overdue,
    dueToday,
  };
}

module.exports = function renderTasks(tasks) {
  const stats = getStatistics(tasks);

  return `


<div class="dashboard">


    <div class="stat-card">

        <div class="stat-icon">
            📋
        </div>

        <div>

            <h3>
                ${stats.total}
            </h3>

            <p>
                Total Tasks
            </p>

        </div>

    </div>




    <div class="stat-card">

        <div class="stat-icon">
            ⚡
        </div>

        <div>

            <h3>
                ${stats.pending}
            </h3>

            <p>
                Pending
            </p>

        </div>

    </div>





    <div class="stat-card">

        <div class="stat-icon">
            ✅
        </div>

        <div>

            <h3>
                ${stats.completed}
            </h3>

            <p>
                Completed
            </p>

        </div>

    </div>






    <div class="stat-card danger-card">

        <div class="stat-icon">
            🚨
        </div>

        <div>

            <h3>
                ${stats.overdue}
            </h3>

            <p>
                Overdue
            </p>

        </div>

    </div>



</div>






<div class="task-list">


${tasks.map((task) => renderTaskItem(task)).join("")}


</div>


`;
};
