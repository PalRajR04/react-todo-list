import React from 'react'
import './TodoListApp.css'
import AddTodos from '../AddTodos/AddTodos'

const TodoListApp = ({tasks, setTasks, newTask, setNewTask}) => {
  const handleComplete = (event, index) => {
    tasks.filter((_, i) => {
      i === index && event.target.parentElement.classList.toggle("done");
      console.log(i===index, event.target, index);
    })
  }
  const handleDelete = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
  }
  const moveup = (index) => {
    if (index === 0) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
  const movedown = (index) => {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }

  return (
    <div className='todo-list-container'>
      <h1>Todos</h1>
      <AddTodos newTask={newTask} setNewTask={setNewTask} tasks={tasks} setTasks={setTasks} />
      <ul>{tasks.map((task, index) => (
          <li className='single-todo' key={index}>
            <span>{task}</span>
            <button className='move-up' onClick={() => moveup(index)}>👆</button>
            <button className='move-down' onClick={() => movedown(index)}>👇</button>
            <button className='mark-complete' onClick={(event) => handleComplete(event,index)}>Mark Complete</button>
            <button className='delete' onClick={() => handleDelete(index)}>Delete</button>
          </li>
      ))}</ul>
    </div>
  )
}

export default TodoListApp
