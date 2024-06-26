"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={""}>Item 1</Link>
            </li>
            <li>
              <Link href={""}>Item 2</Link>
            </li>
            <li>
              <Link href={""}>Item 3</Link>
            </li>
          </ul>
        </div> */}
        <a className="btn btn-ghost text-xl gap-0">
          <span className={"text-orange-400"}>workstation</span>.pro
        </a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={""}>Item 1</Link>
          </li>
          <li>
            <Link href={""}>Item 2</Link>
          </li>
          <li>
            <Link href={""}>Item 3</Link>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <Button title={"Request Quote"} />{" "}
      </div>
    </div>
  );
}

export default Navbar;
