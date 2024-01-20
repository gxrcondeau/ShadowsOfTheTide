import styled from "styled-components";

export const StyledInput = styled.input`
  max-width: 200px;
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => props.color};
  color: black;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputHelper = styled.div`
  font-size: 14px;
  color: #a6a6a6;
`;
