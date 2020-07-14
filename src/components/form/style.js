import styled from "styled-components";

export const TodosHeading = styled.h1`
  font-size: 24px;
  color: #66fcf1;
  margin: 20px 0;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;

export const StyledInput = styled.input`
  display: block;
  font-size: 18px;
  color: ${p => p.theme.colors.white};
  padding: 10px 0;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #66fcf1;
  margin: 0 auto;
  text-align: center;
  background-color: ${p => p.theme.colors.black};
  outline: none;
`;

export const TodoForm = styled.form`
  padding: 20px 0;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  border-radius: 0;
  padding: 10px 30px;
  margin: 20px 0;
  box-shadow: none;
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.teal};
  color: ${p => p.theme.colors.white};
  min-width: 226px;

  :hover {
    background-color: ${p => p.theme.colors.darkgrey};
  }
`;
