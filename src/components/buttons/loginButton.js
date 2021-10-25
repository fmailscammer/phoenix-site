import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="w-max h-auto p-4 text-white bg-blue-800 rounded-full border-indigo-700 hover:bg-blue-900 hover:border-indigo-900 transition-all"
      onClick={() => loginWithRedirect()}
    >
      Log In With Discord
    </button>
  );
};

export default LoginButton;
