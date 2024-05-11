import React, { useState } from 'react';
import './App.css';
import TodoListApp from './components/TodoListApp/TodoListApp';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  return (
    <>
      <TodoListApp tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} />
    </>
  )
}

export default App
