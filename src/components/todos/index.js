import React from "react";
import {
  ListItem,
  TodoButton,
  TodoList,
} from "./style";
import {
  TwoColContainer,
  Col
} from "../layout/style";

const TodosList = props => {
  const { todos, markDone } = props;

  const renderTodos = (status) => {
    if (Object.keys(todos).length) {
      console.log(Object.keys(todos));
      return (
        <TodoList>
          {Object.keys(todos)
            .filter(todo => todos[todo].done === status)
            .map(todo => (
                  <ListItem key={todo}>
                    <TodoButton
                      onClick={() => markDone(todo)}
                    >
                      {todos[todo].description}
                    </TodoButton>
                  </ListItem>
            ))}
        </TodoList>
      );
    }
  };

  return (
    <div>
      <TwoColContainer>
        <Col>
          <h2>Ready</h2>
          {renderTodos(false)}
        </Col>
        <Col>
          <h2>Done</h2>
          {renderTodos(true)}
        </Col>
      </TwoColContainer>
    </div>
  );
};

export { TodosList };
