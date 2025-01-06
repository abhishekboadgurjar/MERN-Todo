import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Fetch todos from backend
  useEffect(() => {
    fetch("http://localhost:3000/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  // Add new todo
  const addTodo = async (title, description) => {
    const newTodo = { title, description };

    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    setTodos([...todos, newTodo]);
    setShowModal(false); // Close modal after adding the todo
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          🌟 Todo List
        </h1>
        <p className="text-center text-gray-600 text-lg mb-4">
          Organize your tasks and stay productive!
        </p>

        {/* Button to trigger modal */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:from-green-500 hover:to-green-700 transition duration-300"
        >
          + Add New Todo
        </button>

        {/* Modal for Todo Form */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
              <TodoForm addTodo={addTodo} onClose={() => setShowModal(false)} />
            </div>
          </div>
        )}

        {/* Todo Items */}
        <div className="space-y-4 mt-8">
          {todos.length === 0 ? (
            <p className="text-center text-gray-600 italic">
              No tasks added yet. Start by adding a new one!
            </p>
          ) : (
            todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
