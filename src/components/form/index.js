import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosList } from "../todos/";
import {
  StyledInput,
  StyledLabel,
  SubmitButton,
  TodoForm,
} from "./style";

const AddTodoForm = () => {
  const [todos, setTodos] = useState({});
  const [task, setTask] = useState("");

  const addTodo = e => {
    e.preventDefault();
    const newTodo = {
      description: task,
      done: false
    };
    const todoId = uuidv4();

    const newTodos = todos;

    newTodos[todoId] = newTodo;

    setTodos({ ...newTodos });
    setTask('')
  };

  const markDone = todoId => {
    const newTodos = todos;

    newTodos[todoId].done = true;

    setTodos({ ...newTodos });
  };

  return (
    <>
    <TodosList markDone={(id) => markDone(id)} todos={todos}/>
    <TodoForm onSubmit={e => addTodo(e)}>
      <StyledLabel htmlFor="task">Add a todo item</StyledLabel>
      <StyledInput
        name="task"
        type="text"
        id="task"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </TodoForm>
    </>
  );
};

export { AddTodoForm };
