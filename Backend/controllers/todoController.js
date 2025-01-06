import Todo from "../models/todoModel.js";

// Get all Todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from the database
    res.status(200).json(todos); // Respond with the list of todos
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error });
  }
};

// Create a new Todo
const createTodo = async (req, res) => {
  const { title, description, isCompleted } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const newTodo = new Todo({
      title,
      description: description || "",
      isCompleted: isCompleted || false,
    });

    const savedTodo = await newTodo.save(); // Save the new Todo to the database
    res.status(201).json(savedTodo); // Respond with the created todo
  } catch (error) {
    res.status(500).json({ message: "Error creating todo", error });
  }
};

// Get a single Todo by ID
const getTodoById = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id); // Find todo by ID

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo); // Respond with the found todo
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo", error });
  }
};

// Update a Todo by ID
const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, isCompleted } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, isCompleted },
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo); // Respond with the updated todo
  } catch (error) {
    res.status(500).json({ message: "Error updating todo", error });
  }
};

// Delete a Todo by ID
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id); // Find and delete the todo by ID

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" }); // Respond with success message
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo", error });
  }
};

export { getTodos, createTodo, getTodoById, updateTodo, deleteTodo };
