import React, { FunctionComponent, useEffect } from "react";

import { AuthHelper } from "../../tools/AuthHelper.ts";
import Button from "../../components/elements/Button/Button";
import { FirstInputCreator, InputFactory } from "../../components/elements/Input/Input";

export default function AuthPage() {
    let authHelper: AuthHelper = new AuthHelper;
    
    function Authorize(): void {
        if(authHelper.IsPlayer()) {
            authHelper.SetPlayer(authHelper.ReadPlayer())
        }
        else {
        }
    }

    function clientCode(creator: InputFactory) {
        console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
        return creator.factoryMethod();
    }



    useEffect(() => {
        Authorize;
    }, [])

    return (
        <>
            <Button title="Hello" disabled={false}/>
            {clientCode(new FirstInputCreator())}
        </>
    )
}