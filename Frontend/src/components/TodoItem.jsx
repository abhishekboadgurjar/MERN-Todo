import React, { useState } from 'react';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted); // Track the completion status
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Handle delete action
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/api/todos/${todo._id}`, {
      method: 'DELETE',
    });
    window.location.reload(); // Refresh to reflect changes
  };

  // Handle edit action
  const handleEdit = async () => {
    const updatedTodo = { title, description };

    await fetch(`http://localhost:3000/api/todos/${todo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });

    setIsEditing(false); // Exit edit mode
    window.location.reload();
  };

  // Handle completed toggle
  const handleCompletionToggle = async () => {
    const updatedTodo = { ...todo, isCompleted: !isCompleted };

    // Update the status in the database
    await fetch(`http://localhost:3000/api/todos/${todo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });

    setIsCompleted(!isCompleted); // Toggle completion status locally
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {isEditing ? (
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Edit Todo</h3>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit Title"
            className="w-full p-3 mb-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Edit Description"
            rows="4"
            className="w-full p-3 mb-4 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
          <div className="flex space-x-3">
            <button
              onClick={handleEdit}
              className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3">
            {/* Checkbox for completion */}
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={handleCompletionToggle}
              className="form-checkbox h-5 w-5 text-green-600"
            />
            <h2
              className={`text-2xl font-semibold text-blue-800 mb-2 ${isCompleted ? 'line-through text-gray-500' : ''}`}
            >
              {todo.title}
            </h2>
          </div>
          <p className="text-md text-gray-700 mb-4">{todo.description}</p>
          <div className="flex space-x-3">
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
            >
              Edit
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="px-5 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Delete</h3>
            <p className="text-sm text-gray-600 mb-6">Are you sure you want to delete this todo?</p>
            <div className="flex space-x-3">
              <button
                onClick={handleDelete}
                className="px-5 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
