import React from "react";

import { StyledInput, StyledInputHelper, StyledInputWrapper } from "./styledInput";

interface InputProps {
  placeholder: string;
  helper: string;
  disabled: boolean;
  type: string;
}

export enum InputTypes {
  text = "text",
  email = "email",
  psswd = "password",
  num = "number"
}

export default function Input({placeholder, helper, disabled, type}: InputProps) {
  return (
    <StyledInputWrapper>
      {helper !== "" &&
        <StyledInputHelper>{helper + ":"}</StyledInputHelper>
      }
      <StyledInput placeholder={placeholder} disabled={disabled} type={type}/>
    </StyledInputWrapper>
  )
}