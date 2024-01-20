import React, {useEffect, useState} from "react";
import AuthPage from "./pages/Auth/AuthPage.tsx";

import { AuthHelper } from "./tools/AuthHelper.ts";

export default function App() {
    const [isAuthorized, setAuthorized] = useState<boolean>(false);

    let authHelper:AuthHelper = new AuthHelper;

    function Bootstrap():void{
        if(authHelper.GetPlayer()) {
            setAuthorized(true);
        }
        else {
            setAuthorized(false);
        }
    }

    useEffect(() => {
        Bootstrap
    }, [])

    return(
        <>
        {isAuthorized ? <h1>Welcome</h1> : <AuthPage/>}
        </>
    )
}