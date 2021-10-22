import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

const AuthButton = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="flex">
        <a href="/" className="flex mx-2">
          <img
            className="transition-all w-16 h-16 my-auto rounded-full hover:rounded-xl border-black border-2"
            src={user.picture}
            alt="user icon"
          />{" "}
          {/* <div className="p-6 m-auto">{user.name}</div> */}
        </a>
        <LogoutButton />
      </div>
    );
  } else {
    return <LoginButton />;
  }
};

export default AuthButton;
