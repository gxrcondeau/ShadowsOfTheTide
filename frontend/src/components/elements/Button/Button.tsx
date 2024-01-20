import React from "react";

import { StyledButton } from "./styledButton";

interface ButtonProps {
    title: string;
    disabled: boolean;
}

export default function Button({title, disabled}: ButtonProps) {
    return (
        <StyledButton disabled={disabled}>
            {title}
        </StyledButton>
    );
}