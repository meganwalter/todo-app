import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodosList } from "../todos/";
import { ProgressBar } from "../progress/";
import {
  StyledInput,
  StyledLabel,
  SubmitButton,
  TodoForm,
  TodosHeading
} from "./style";

const AddTodoForm = () => {
  const [todos, setTodos] = useState({});
  const [task, setTask] = useState("");
  const [complete, setComplete] = useState(0);

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
    setComplete(findCompletionPercent());
    setTask('')
  };

  const markDone = todoId => {
    const newTodos = todos;

    newTodos[todoId].done = !todos[todoId].done;

    setTodos({ ...newTodos });
    setComplete(findCompletionPercent());
  };

  const findCompletionPercent = () => {
    const completed = Object.keys(todos).filter(todo => todos[todo].done).length;
    const total = Object.keys(todos).length;

    return (Math.round((completed / total) * 100) / 100) * 100;
  }

  return (
    <>
      <TodosHeading>Todo List</TodosHeading>
      <ProgressBar completed={complete} />
      <TodosList markDone={id => markDone(id)} todos={todos} />
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
