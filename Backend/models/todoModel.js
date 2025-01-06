import mongoose from "mongoose";

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Title of the todo, required field
  description: { type: String, default: "" }, // Description should be a string
  isCompleted: { type: Boolean, default: false }, // Optional: Add an isCompleted field for task status
});

// Create the Todo model
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
