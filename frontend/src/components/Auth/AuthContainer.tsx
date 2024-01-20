import React, { useState } from "react";
import Card from "../elements/Card/Card";
import Input, { InputTypes } from "../elements/Input/Input";
import Button, { ButtonTypes } from "../elements/Button/Button";

import { StyledAuthContainer } from "./styledAuthContainer";
import { StyledButtonGroup } from "../elements/Button/styledButton";
import Icon from "../elements/Icon/Icon";

export default function AuthContainer() {
  const [savedPlayer, setSavedUser] = useState<string>("test");
  function Test1() {
    console.log("Button login input works");
  }

  function Test2() {
    console.log("Button back input works");
  }

  function LogOut() {
    setSavedUser("");
  }

  return (
    <StyledAuthContainer>
      <Card
        title="Authorization"
        content={
          <>
            {savedPlayer !== "" ? (
              <>
                <Button
                  click={Test2}
                  type={ButtonTypes.panel}
                  icon={<Icon icon="User" size={32} />}
                  helper="Signed in"
                  text={savedPlayer}
                  disabled={false}
                />
                <Button
                  click={LogOut}
                  type={ButtonTypes.secondary}
                  text="Not me"
                  disabled={false}
                />
              </>
            ) : (
              <>
                <Input
                  name="usernameInput"
                  type={InputTypes.text}
                  helper="Enter desired username"
                  disabled={false}
                />
                <StyledButtonGroup>
                  <Button
                    click={Test1}
                    type={ButtonTypes.primary}
                    text="Login"
                    disabled={false}
                  />
                  <Button
                    click={Test2}
                    type={ButtonTypes.secondary}
                    text="Back"
                    disabled={false}
                  />
                </StyledButtonGroup>
              </>
            )}
          </>
        }
        sp={22}
      />
    </StyledAuthContainer>
  );
}
