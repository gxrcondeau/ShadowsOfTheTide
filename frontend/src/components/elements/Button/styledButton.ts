import styled from "styled-components";

function ButtonType(type?: string): { [key: string]: string } {
  let props: { [key: string]: string } = {
    // Main props
    width: "fit-content",
    height: "32px",
    p: "4px 12px",
    color: "",
    hAlign: "center",
    vAlign: "center",
    background: "",
    border: "",
    // Hover props
    hoverBg: "",
  };

  switch (type) {
    case "primary":
      props["color"] = "#ffffff";
      props["background"] = "#1b1b1b";
      props["border"] = "none";
      props["hoverBg"] = "#4c4c4c"
      return props;
    case "secondary":
      props["color"] = "#1b1b1b";
      props["background"] = "#ffffff";
      props["border"] = "1px solid #1b1b1b";
      props["hoverBg"] = "#e5e5e5"
      return props;
    case "panel":
      props["width"] = "100%";
      props["height"] = "72px";
      props["p"] = "4px 0";
      props["color"] = "#1b1b1b";
      props["background"] = "#ffffff";
      props["border"] = "none";
      props["hAlign"] = "flex-start";
      props["hoverBg"] = "#e5e5e5"
      return props;
    default:
      props["color"] = "#ffffff";
      props["background"] = "#1b1b1b";
      props["border"] = "none";
      props["hoverBg"] = "#4c4c4c"
      return props;
  }
}

export const StyledButton = styled.button<{ t?: string }>`
  min-width: 108px;
  width: -moz-fit-content;
  width: ${(props) => ButtonType(props.t)["width"]};
  height: ${(props) => ButtonType(props.t)["height"]};
  padding: ${(props) => ButtonType(props.t)["p"]};
  color: ${(props) => ButtonType(props.t)["color"]};
  background-color: ${(props) => ButtonType(props.t)["background"]};
  border: ${(props) => ButtonType(props.t)["border"]};
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => ButtonType(props.t)["hoverBg"]};
  }
`;

export const StyledButtonContent = styled.div<{ t?: string }>`
  width: 100%;
  height: 100%;
  font-size: 15px;
  display: flex;
  align-items: ${(props) => ButtonType(props.t)["vAlign"]};
  justify-content: ${(props) => ButtonType(props.t)["hAlign"]};
  column-gap: 12px;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  column-gap: 4px;
`;

export const StyledButtonIcon = styled.div`
  width: 48px;
  height: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 50%;
`;

export const StyledButtonText = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledButtonHelper = styled.small`
  color: #767676;
  font-size: 12px;
  display: block;
`;
