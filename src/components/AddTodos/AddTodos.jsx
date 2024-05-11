import React from 'react';
import './AddTodos.css';

const AddTodos = ({newTask, setNewTask, tasks, setTasks}) => {
    const handleAddTasks = () => {
        setTasks(previousTasks => [...previousTasks, newTask]);
        setNewTask('');
    }
    const updateInput = (event) => {
        setNewTask(event.target.value);
    }
    return (
        <div>
            <input type='text' id='todo_input' placeholder='Enter tasks that you want to finish... ' value={newTask} onChange={event => updateInput(event)} />
            <button className='add-btn' onClick={handleAddTasks}>Add Todo</button>
        </div>
    )
}

export default AddTodos;