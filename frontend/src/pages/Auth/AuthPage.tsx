import React, { useEffect } from "react";

import { AuthHelper } from "../../tools/AuthHelper.ts";
import AuthContainer from "../../components/Auth/AuthContainer";

export default function AuthPage() {
  let authHelper: AuthHelper = new AuthHelper();

  function Authorize(): void {
    if (authHelper.IsPlayer()) {
      authHelper.SetPlayer(authHelper.ReadPlayer());
    } else {
    }
  }

  useEffect(() => {
    Authorize;
  }, []);

  return <AuthContainer/>
}
