import React, { ReactElement } from "react";

import {
  StyledButton,
  StyledButtonContent,
  StyledButtonHelper,
  StyledButtonIcon,
  StyledButtonText,
} from "./styledButton";

interface ButtonProps {
  text: string;
  helper?: string;
  icon?: ReactElement;
  disabled: boolean;
  type?: string;
  click: () => void;
}

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  panel = "panel",
}

export default function Button({
  text,
  disabled,
  type,
  click,
  icon,
  helper,
}: ButtonProps) {
  return (
    <StyledButton onClick={click} t={type} disabled={disabled}>
      <StyledButtonContent t={type}>
        {icon && <StyledButtonIcon>{icon}</StyledButtonIcon>}
        {type === "panel" ? (
          <StyledButtonText>{text}<StyledButtonHelper>{helper}</StyledButtonHelper></StyledButtonText>
        ) : (
          <>{text}</>
        )}
      </StyledButtonContent>
    </StyledButton>
  );
}
