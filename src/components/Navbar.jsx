import React from "react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar justify-between bg-base-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost self-stretch text-xl" href="/">
            Open Data Day Recife 2024
          </a>
        </div>
      </div>
    </div>
  );
}
