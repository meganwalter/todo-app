import styled from "styled-components";

export const TodoButton = styled.button`
  font-size: 18px;
  color: ${p => (p.disabled ? p.theme.colors.darkTeal : p.theme.colors.white)};
  margin: 10px 0;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    opacity: .8;
  }
`;

export const TodosHeading = styled.h1`
  font-size: 24px;
  color: #66fcf1;
  margin: 20px 0;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const TodoList = styled.ul`
  margin: 20px 0;
  padding: 0 20px;
  background-color: ${p => p.theme.colors.darkgrey};
`;
