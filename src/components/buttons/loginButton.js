import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="w-max h-auto p-4 btn btn-green"
      onClick={() => loginWithRedirect()}
    >
      Log In With Discord
    </button>
  );
};

export default LoginButton;
