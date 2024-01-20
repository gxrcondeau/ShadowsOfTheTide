import styled from "styled-components";

export const StyledCardWrapper = styled.div<{disabled: boolean}>`
  max-width: 440px;
  width: 100%;
  @-moz-document url-prefix() {
    max-height: -moz-max-content;
  }
  height: fit-content;
  padding: 44px;
  display: ${props => props.disabled ? "none" : "flex"};
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0,0,0,.2);
  border: 1px dashed #000000;
`;

export const StyledCardHeader = styled.div`
  width: 100%;
  padding-bottom: 8px;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const StyledCardBody = styled.div<{spacing?:number}>`
  width: 100%;
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  row-gap: ${props => props.spacing ? props.spacing : 0}px;
`;

export const StyledCardFooter = styled.div`
  width: 100%;
  padding-top: 8px;
  font-size: 12px;
  color: rgba(0,0,0,0.3);
  display: flex;
  border-top: 1px solid rgba(0,0,0,0.1);
`;

export const StyledCardTitle = styled.div`
  font-size: 24px;
`;