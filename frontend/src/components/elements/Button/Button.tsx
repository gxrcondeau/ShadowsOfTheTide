import React from "react";

import { StyledButton } from "./styledButton";

interface ButtonProps {
  text: string;
  disabled: boolean;
}

export default function Button({ text, disabled }: ButtonProps) {
  return <StyledButton disabled={disabled}>{text}</StyledButton>;
}
