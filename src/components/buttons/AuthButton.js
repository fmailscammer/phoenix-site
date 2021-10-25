import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const AuthButton = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="flex">
        <Link to="/dashboard" className="flex mx-2">
          <img
            className="transition-all
                        transform w-14 h-14 moverflow-hidden
                        my-auto rounded-full scale-100 hover:scale-90"
            src={user.picture}
            alt="user icon"
          />
          {/* <div className="p-6 m-auto">{user.name}</div> */}
        </Link>
        <LogoutButton />
      </div>
    );
  } else {
    return <LoginButton />;
  }
};

export default AuthButton;
