import React, { FunctionComponent, ReactElement } from "react";
import { NumRegExp, TextRegExp } from "../../../tools/RegExp";

import { StyledInput } from "./styledInput";

interface Input {
    component: ReactElement;
}

export abstract class InputFactory {
    public abstract factoryMethod(): ReactElement;
}

export class FirstInputCreator extends InputFactory{
    public factoryMethod(): ReactElement {
        let tmp = new FirstInput;
        tmp.component = <StyledInput>1</StyledInput>
        return tmp.component;
    }
}

export class SecondInputCreator extends InputFactory{
    public factoryMethod(): ReactElement {
        let tmp = new FirstInput;
        tmp.component = <StyledInput>2</StyledInput>
        return tmp.component;
    }
}

class FirstInput implements Input {
    public component!: ReactElement;
}

class SecondInput implements Input {
    public component!: ReactElement;
}