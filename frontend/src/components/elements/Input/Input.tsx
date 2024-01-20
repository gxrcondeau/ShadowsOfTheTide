import React from "react";

import { StyledInput, StyledInputHelper, StyledInputWrapper } from "./styledInput";

interface InputProps {
  placeholder?: string;
  name: string;
  helper: string;
  disabled: boolean;
  type: string;
  mb?: number;
}

export enum InputTypes {
  text = "text",
  email = "email",
  psswd = "password",
  num = "number"
}

export default function Input({placeholder, name, helper, disabled, type, mb=0}: InputProps) {
  return (
    <StyledInputWrapper mb={mb}>
      {helper !== "" &&
        <StyledInputHelper htmlFor={name}>{helper + ":"}</StyledInputHelper>
      }
      <StyledInput id={name} placeholder={placeholder} disabled={disabled} type={type}/>
    </StyledInputWrapper>
  )
}