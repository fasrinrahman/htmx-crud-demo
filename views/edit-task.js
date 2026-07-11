const { getPriority } = require("./helpers");

module.exports = function renderEditTask(task) {
  const priority = getPriority(task.priority);

  return `
<div
    class="task-card editing"
    id="task-${task.id}"
>

    <form

        hx-put="/tasks/${task.id}"

        hx-target="#task-${task.id}"

        hx-swap="outerHTML"

        class="edit-form"

    >

        <div class="form-group">

            <label>
                Task Title
            </label>

            <input

                type="text"

                name="title"

                value="${task.title}"

                required

                maxlength="120"

            >

        </div>



        <div class="form-row">

            <div class="form-group">

                <label>
                    Due Date
                </label>

                <input

                    type="datetime-local"

                    name="dueDate"

                    value="${task.dueDate || ""}"

                >

            </div>



            <div class="form-group">

                <label>
                    Priority
                </label>

                <select

                    name="priority"

                >

                    <option

                        value="low"

                        ${priority.label === "Low" ? "selected" : ""}

                    >

                        🟢 Low

                    </option>

                    <option

                        value="medium"

                        ${priority.label === "Medium" ? "selected" : ""}

                    >

                        🟡 Medium

                    </option>

                    <option

                        value="high"

                        ${priority.label === "High" ? "selected" : ""}

                    >

                        🔴 High

                    </option>

                </select>

            </div>

        </div>



        <div class="edit-actions">

            <button

                type="submit"

                class="btn btn-save"

            >

                💾 Save

            </button>



            <button

                type="button"

                class="btn btn-cancel"

                hx-get="/tasks/${task.id}"

                hx-target="#task-${task.id}"

                hx-swap="outerHTML"

            >

                ✖ Cancel

            </button>

        </div>

    </form>

</div>
`;
};
