import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="w-max h-auto p-4 btn btn-green"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
