import express from "express";
import { 
  getTodos, 
  createTodo, 
  getTodoById, 
  updateTodo, 
  deleteTodo 
} from "../controllers/todoController.js";

const router = express.Router();

// Route to get all todos
router.get("/", getTodos);

// Route to create a new todo
router.post("/", createTodo);

// Route to get a single todo by ID
router.get("/:id", getTodoById);

// Route to update a todo by ID
router.put("/:id", updateTodo);

// Route to delete a todo by ID
router.delete("/:id", deleteTodo);

export default router;
