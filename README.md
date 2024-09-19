# Task Management App

This is a simple **Task Manager Application** built using **React** and **Tailwind CSS**. The application allows users to add, edit, delete, and filter tasks based on priority levels. Users can view task details, edit tasks via a form, and organize tasks by priority.

## Features

1. **Task List View**:
   - Displays a list of tasks with their title, due date, and priority level.
   - Clicking on a task reveals additional details like the description.

2. **Add Task**:
   - Users can add new tasks with a title, description, due date, and priority level.
   - Form validation ensures that all fields are required.

3. **Edit Task**:
   - Users can modify existing tasks by clicking the "Edit" button.
   - A modal form allows editing the task's title, description, due date, and priority.

4. **Delete Task**:
   - Users can delete tasks from the list by clicking the "Delete" button.

5. **Task Filtering**:
   - Users can filter tasks based on their priority levels (e.g., High, Medium, Low, or Done).

## Technologies Used

- **React**: A JavaScript library used to build the user interface and handle task state management.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **useState Hook**: A React hook used for managing state in the app, including tasks and form inputs.

## Project Structure

- **App.js**: The main component that holds the task state and renders the task list.
- **TaskList.js**: Displays the list of tasks and manages editing and deleting.
- **TaskItem.js**: Displays individual task details and buttons for editing and deleting a task.
- **EditTaskForm.js**: A form that allows users to edit existing tasks.
  
## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git

2. Navigate into the project directory:

    ```bash
    cd task-manager
3. Install dependencies:

    ```bash
    npm install

4.  Start the development server:

    ```bash
    npm start