import React from 'react';

const TaskItem = ({ task, isSelected, onClick, onEdit, onDelete }) => {
  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
      <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
        <div>
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
        </div>
        <p className={`font-bold ${task.priority === 'High' ? 'text-red-600' : task.priority === 'Medium' ? 'text-yellow-600' : task.priority === 'Low' ? 'text-green-600' : ''}`}>
          {task.priority}
        </p>
      </div>

      {/* Task details (description, Edit, Delete buttons) */}
      {isSelected && (
        <div className="mt-2">
          <p className="text-sm text-gray-700">
            <strong>Description: </strong>{task.description}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Due Date: </strong>{task.dueDate}
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
              onClick={() => onEdit(task.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
