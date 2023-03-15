import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import { Context } from "../../utils/context";

function Header() {
  return (
    <header className=" sticky top-0 left-0 z-10 ">
      <nav className=" bg-blackBlue py-4">
        <div className="container mx-auto flex justify-end items-center text-gray-100 px-6 sm:px-4 md:px-0">
          {/* LOGO */}
          <a className="flex items-center space-x-2 mr-auto sm:mr-8" href="/">
            <img
              src="../../../public/assets/logo.svg"
              className="w-8 md:w-10"
              alt="logo"
            />
            <h1 className="text-2xl md:text-4xl">InclusiveKart</h1>
          </a>

          {/* SEARCH BUTTON */}
          <button className="material-symbols-sharp text-gray-100 text-2xl mr-6 sm:mr-auto px-2 sm:border-2 rounded">
            search
          </button>

          {/* MENU */}
          <div className="flex space-x-6 md:space-x-10">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <span className="material-symbols-sharp text-2xl sm:text-3xl">
                person
              </span>
              <p className="text-xs -m-0.5 hidden md:block">Profile</p>
            </div>

            <div className="flex flex-col relative justify-center items-center cursor-pointer">
              <span className="material-symbols-sharp text-2xl sm:text-3xl">
                shopping_cart
              </span>
              <span className="absolute -right-2 -top-2 bg-red-600 rounded-full px-2 text-xs md:text-sm">
                5
              </span>
              <p className="text-xs -m-0.5 hidden md:block">Cart</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
