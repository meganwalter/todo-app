import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const Todos = () => {
  const [todos, setTodos] = useState({});
  const [task, setTask] = useState('');

  const renderTodos = () => {
    if (Object.keys(todos).length) {
      console.log(Object.keys(todos));
      return (
        <ul>
          {Object.keys(todos).map(todo => (
            <li key={todo}>
              <button
                disabled={todos[todo].done}
                onClick={() => markDone(todo)}
              >
                {todos[todo].description}
              </button>
            </li>
          ))}
        </ul>
      );
      }
  }

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      description: task,
      done: false,
    }
    const todoId = uuidv4();

    const newTodos = todos;

    newTodos[todoId] = newTodo;

    setTodos({ ...newTodos });
  }

  const markDone = (todoId) => {
    const newTodos = todos;

    newTodos[todoId].done = true;

    setTodos({ ...newTodos });
  }
   
  return (
    <div>
      <h1>Todos List</h1>
      {renderTodos()}
      <form onSubmit={e => addTodo(e)}>
        <label htmlFor="task">Add a todo item</label>
        <input name="task" type="text" id="task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export { Todos };