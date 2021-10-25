import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import AuthButton from "./buttons/AuthButton";

const Navbar = () => {
  return (
    <nav className="container flex items-center py-4 mt-4 sm:mt-12 mx-auto">
      <div className="w-16 h-16 py-1 flex logo-color">
        <img src={Logo} alt="Phoenix Logo" />
      </div>
      <h1 className="animate__animated animate__fadeInDown font-bold my-auto mx-4 text-blue-800 text-3xl">
        Phoenix
      </h1>
      <div className="my-auto flex justify-end flex-1 gap-12">
        <Link className="my-auto" to="/">
          FAQ
        </Link>
        <Link className="my-auto" to="/">
          About
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
