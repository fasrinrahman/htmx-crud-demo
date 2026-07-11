module.exports = function renderEmptyState() {

    return `

<div class="empty-state">


    <div class="empty-icon">

        📝

    </div>



    <h2>

        No tasks yet

    </h2>



    <p>

        Start organizing your work by creating your first task.

    </p>



    <div class="empty-tips">


        <div class="tip-card">

            ⚡

            <span>

                Powered by HTMX

            </span>

        </div>




        <div class="tip-card">

            📅

            <span>

                Add deadlines

            </span>

        </div>




        <div class="tip-card">

            🔥

            <span>

                Set priorities

            </span>

        </div>


    </div>


</div>

`;

};