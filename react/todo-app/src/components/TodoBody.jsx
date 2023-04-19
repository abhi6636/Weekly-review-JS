import React, { useState } from 'react';
import './TodoBody.css'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div id='divBody'>
      
      <div id='formDiv'>
      <h1>Todo List</h1>
      <form className='d-flex input-group w-auto' onSubmit={handleSubmit} >
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button>Add</button>
      </form>
      
      <div id='deleteButton'>
      <ol className='list'>
        {todos.map((todo, index) => (
       <li key={index}>
            {todo} 
         <span> <button onClick={() => handleDelete(index)}>Delete</button></span>
          </li>
        ))}
      </ol>
      </div> 
      </div>
    </div>
  );
}

export default TodoApp;