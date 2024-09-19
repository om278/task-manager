import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Lorem Ipsum is the industry standard dummy text since the 1500s.', dueDate: '30 July 2024', priority: 'High' },
    { id: 2, title: 'Task 2', description: 'Sample task description for task 2.', dueDate: '25 July 2024', priority: 'High' },
    { id: 3, title: 'Task 3', description: 'Sample task description for task 3.', dueDate: '01 Aug 2024', priority: 'Medium' },
    { id: 4, title: 'Task 4', description: 'Sample task description for task 4.', dueDate: '12 Aug 2024', priority: 'Medium' }
  ]);

  // Function to add new task to the task list
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  return (
    <Router>
      <div className="min-h-screen  bg-gray-50 flex flex-col items-center justify-center p-6">
        <nav className="mb-4">
          <Link to="/" className="mr-4 text-3xl text-teal-600 ">Task List View</Link>
          <Link to="/add-task" className="text-xl p-2 font-serif text-white bg-teal-600 rounded hover:text-black">Add New Task</Link>
        </nav>

        <Routes>
          {/* Task List Route */}
          <Route path="/" element={<TaskList tasks={tasks} setTasks={setTasks} />} />

          {/* Add Task Route */}
          <Route path="/add-task" element={<TaskForm addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
