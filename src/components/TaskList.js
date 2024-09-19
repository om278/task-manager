import React, { useState } from 'react';
import TaskItem from './TaskItem';
import EditTaskForm from './EditTaskForm';

const TaskList = ({ tasks, setTasks }) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [editingTask, setEditingTask] = useState(null); // Track the task being edited
  const [filter, setFilter] = useState('All'); // Filter state

  // Handle task click to show/hide description
  const handleTaskClick = (taskId) => {
    setSelectedTaskId(selectedTaskId === taskId ? null : taskId);
  };

  // Handle filter change
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Edit task handler (opens the edit form)
  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit); // Set the task to be edited
  };

  // Save task handler (updates the task)
  const handleSaveTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks); // Update the task list with the edited task
    setEditingTask(null); // Close the edit form
  };

  // Delete task handler
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks); // Update task list by removing the deleted task
  };

  // Filter tasks based on the current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    return task.priority === filter;
  });

  return (
    <div className="max-w mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Task List View</h2>
      
      {/* Filter Buttons */}
      <div className="mb-4 flex justify-between">
        {['All', 'High', 'Medium', 'Low', 'Done'].map((priority) => (
          <button
            key={priority}
            className={`px-4 py-2 rounded ${filter === priority ? 'bg-teal-500 text-white' : 'bg-gray-200 text-teal-600'}`}
            onClick={() => handleFilterChange(priority)}
          >
            {priority}
          </button>
        ))}
      </div>

      {/* Display the filtered tasks */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            isSelected={selectedTaskId === task.id}
            onClick={() => handleTaskClick(task.id)}
            onEdit={handleEditTask} // Edit task handler
            onDelete={handleDeleteTask} // Delete task handler
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks found for {filter}</p>
      )}

      {/* Show the edit form modal if editing a task */}
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onSave={handleSaveTask}
          onClose={() => setEditingTask(null)} // Close the edit form
        />
      )}
    </div>
  );
};

export default TaskList;
