# ⚡ HTMX Task Manager

A modern task management application built using **HTMX + Express.js**.

This project demonstrates a **Server-Driven UI architecture** where the backend generates HTML fragments and HTMX updates only the required parts of the page without full reloads.

---

# 🚀 Features

## Task Management

✅ Create tasks  
✅ View tasks  
✅ Edit tasks inline  
✅ Delete tasks  
✅ Complete / Undo tasks

---

## Smart Task Features

📅 Due date and time

🔥 Priority levels:

- 🟢 Low
- 🟡 Medium
- 🔴 High

⏰ Relative timestamps:

Just now
5 minutes ago
2 hours ago
Yesterday

🚨 Automatic due status:

Due Today
Due Tomorrow
Overdue

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js

## Frontend

- HTML5
- CSS3
- HTMX

## Architecture

Server Driven UI

---

# 📂 Project Structure

htmx-task-manager

│
├── server.js
├── package.json
├── README.md
│
├── public
│ ├── index.html
│ └── style.css
│
└── views
├── helpers.js
├── tasks.js
├── task-item.js
├── edit-task.js
└── empty-state.js

---

# ⚡ How HTMX Works

Traditional SPA approach:

User
↓
JavaScript Framework
↓
API JSON
↓
Update DOM

HTMX approach:

User
↓
HTMX Request
↓
Express Server
↓
Generate HTML Fragment
↓
Replace Required Section

The browser does not reload the complete page.

Only the required component changes.

---

# 🔥 Example Flow

## Creating a Task

Click Add Task
↓
POST /tasks
↓
Express creates task
↓
Server returns HTML
↓
HTMX updates task list

---

# ▶️ Running The Project

Install dependencies:

````bash
npm install
Start development server:
npm start
Open:

http://localhost:3000

🎨 UI Features
Modern dashboard
Glass style cards
Responsive layout
Priority badges
Due date indicators
HTMX architecture panel
Clean presentation design
📚 Learning Goals

This project demonstrates:

Backend
Express routing
Server-side rendering
Data handling
HTML generation
HTMX
hx-get
hx-post
hx-put
hx-delete
hx-target
hx-swap
Partial page updates
🔮 Future Improvements

Possible production upgrades:

PostgreSQL database
User authentication
Multiple users
Real-time notifications
Drag and drop tasks
Calendar view
REST API layer
👨‍💻 Author

Mohamed Fasrin Rahman

Built with:

⚡ HTMX

Express.js
Node.js

---

# Repository Complete ✅

Current repository:

```text
htmx-task-manager
│
├── package.json                 ✅
├── server.js                    ✅
├── README.md                    ✅
│
├── public
│   ├── index.html               ✅
│   └── style.css                ✅
│
└── views
    ├── helpers.js               ✅
    ├── tasks.js                 ✅
    ├── task-item.js             ✅
    ├── edit-task.js             ✅
    └── empty-state.js            ✅
````
