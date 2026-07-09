const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" }
];

function renderItems() {
  return `
    <ul>
      ${items.map(item => `
        <li>
          ${item.name}

          <button
            hx-delete="/items/${item.id}"
            hx-target="#items"
            hx-swap="innerHTML">
            Delete
          </button>
        </li>
      `).join("")}
    </ul>
  `;
}

app.get("/items", (req, res) => {
  res.send(renderItems());
});

app.post("/items", (req, res) => {
  items.push({
    id: Date.now(),
    name: req.body.name
  });

  res.send(renderItems());
});

app.delete("/items/:id", (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.send(renderItems());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});