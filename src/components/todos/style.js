import styled from "styled-components";

export const TodoButton = styled.button`
  font-size: 18px;
  color: ${p => p.theme.colors.darkTeal};
  margin: 10px 0;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    opacity: .8;
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const TodoList = styled.ul`
  margin: 20px 0;
  padding: 0 20px;
  background-color: ${p => p.theme.colors.darkgrey};
`;
