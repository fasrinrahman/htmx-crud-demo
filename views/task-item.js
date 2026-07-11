const { getRelativeTime, getDueStatus, getPriority } = require("./helpers");

module.exports = function renderTaskItem(task) {
  const due = getDueStatus(task.dueDate);
  const priority = getPriority(task.priority);

  return `

<div
    class="task-card ${task.completed ? "completed" : ""}"
    id="task-${task.id}"
>

    <div class="task-main">

        <div class="task-header">

            <div class="task-title-group">

                <h3 class="task-title">

                    ${task.completed ? "✅" : "📋"}

                    ${task.title}

                </h3>

                <div class="task-meta">

                    <span class="meta-item">

                        🕒 Created ${getRelativeTime(task.createdAt)}

                    </span>

                </div>

            </div>

        </div>



        <div class="task-badges">

            <span class="badge ${priority.className}">

                ${priority.icon}

                ${priority.label} Priority

            </span>

            <span class="badge ${due.className}">

                📅 ${due.label}

            </span>

        </div>

    </div>



    <div class="task-actions">

        <button
            class="btn btn-edit"

            hx-get="/tasks/${task.id}/edit"

            hx-target="#task-${task.id}"

            hx-swap="outerHTML">

            ✏ Edit

        </button>



        <button
            class="btn btn-complete"

            hx-post="/tasks/${task.id}/complete"

            hx-target="#task-container"

            hx-swap="innerHTML">

            ${task.completed ? "↩ Undo" : "✓ Complete"}

        </button>



        <button
            class="btn btn-delete"

            hx-delete="/tasks/${task.id}"

            hx-confirm="Delete '${task.title}'?"

            hx-target="#task-container"

            hx-swap="innerHTML">

            🗑 Delete

        </button>

    </div>

</div>

`;
};
