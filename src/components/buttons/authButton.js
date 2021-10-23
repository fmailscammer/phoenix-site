import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthButton = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="flex">
        <a href="/" className="flex mx-2">
          <img
            className="transition-all
                        transform w-16 h-16 moverflow-hidden
                        my-auto rounded-full scale-100 hover:scale-90"
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
