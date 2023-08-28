const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse incoming JSON data
app.use(express.json());

// Sample data
let todos = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Walk the dog' },
];

// GET /todos - Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST /todos - Create a new todo
app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
