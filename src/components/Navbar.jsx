import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-3 px-5 bg-[#B9E5E8] border-b-[#4A628A] border-b-4">
      <div className="container p-0 mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            className="cursor-pointer"
            src="/logo.svg"
            alt=""
            width={30}
            height={30}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
