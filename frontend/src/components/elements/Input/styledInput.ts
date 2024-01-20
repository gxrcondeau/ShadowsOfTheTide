import styled from "styled-components";

export const StyledInput = styled.input`
  max-width: 348px;
  width: 100%;
  height: 38px;
  padding: 0 12px;
  background-color: ${(props) => props.color};
  color: black;
`;

export const StyledInputWrapper = styled.div<{ mb?: number }>`
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  display: flex;
  flex-direction: column;
`;

export const StyledInputHelper = styled.label`
  padding-bottom: 0.125rem;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;
