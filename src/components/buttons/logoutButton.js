import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="w-max p-6 text-white bg-blue-800 rounded-xl border-indigo-700 hover:bg-blue-900 hover:border-indigo-900 transition-all" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;