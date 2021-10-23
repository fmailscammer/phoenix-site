import React from "react";
import Logo from "../logo.svg";
import AuthButton from "./buttons/AuthButton";

const Navbar = () => {
  return (
    <div className="flex p-5 bg-gray-400">
      <div className="w-20 h-20 my-auto flex justify-center flex-1">
        <img src={Logo} alt="Phoenix Logo" />
      </div>
      <div className="my-auto flex justify-center flex-1">
        <h1 className="animate__animated animate__fadeInDown font-bold my-auto text-5xl text-purple">
          Phoenix
        </h1>
      </div>
      <div className="my-auto flex justify-center flex-1">
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
