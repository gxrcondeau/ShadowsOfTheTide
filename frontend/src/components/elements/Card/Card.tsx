import React, { ReactElement } from "react";
import { StyledCardTitle, StyledCardWrapper, StyledCardHeader, StyledCardBody, StyledCardFooter } from "./styledCard";

interface CardProps {
  title: string;
  content: ReactElement;
  signature?: string;
  sp?: number,
  disabled?: boolean
}

export default function Card({ title, content, signature="", sp, disabled=false }: CardProps) {
  let date: Date = new Date();

  return (
    <StyledCardWrapper disabled={disabled}>
      <StyledCardHeader>
        <StyledCardTitle>{title}</StyledCardTitle>
      </StyledCardHeader>
      <StyledCardBody spacing={sp}>
        {content}
      </StyledCardBody>
      <StyledCardFooter>
        {signature !== "" ? signature : "Herethic Team " + date.getFullYear()}
      </StyledCardFooter>
    </StyledCardWrapper>
  );
}
