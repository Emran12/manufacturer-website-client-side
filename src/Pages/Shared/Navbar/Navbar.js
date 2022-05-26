import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const elements = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-blue-500 mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 flex justify-end"
          >
            {elements}
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-white normal-case text-xl"
          to="/home"
        >
          Computer Accessories
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex justify-end">
        <ul className="menu menu-horizontal text-white p-0">{elements}</ul>
      </div>
    </div>
  );
};

export default Navbar;
