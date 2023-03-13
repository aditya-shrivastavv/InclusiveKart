import { Link } from "react-router-dom"; 

import logo from "./assets/logo.svg";

function Navbar() {
  return (
    <header>
      <nav className="bg-red-500 p-2">
        <div className="container mx-auto flex justify-end items-center text-gray-100">

          {/* Logo */}
          <a
            className="flex items-center space-x-2 mr-8"
            href="/">
            <img src={logo} className="w-10" />
            <h1 className="text-2xl">InclusiveKart</h1>
          </a>

          {/* Search Bar */}
          <div className="flex justify-center items-center bg-gray-500 border-2 border-gray-700 rounded-lg mr-auto">
            <input
              className="py-1 px-4 text-gray-900 border-none rounded-l-lg"
              placeholder="Search Product"/>
            <button className="material-symbols-sharp text-gray-900 text-2xl px-2">search</button>
          </div>

          {/* Profile and Cart */}
          <div className="flex space-x-6">
            <a className="flex flex-col items-center" href="#">
              <span className="material-symbols-sharp text-xl">person</span>
              <p className="text-xs -m-0.5">Profile</p>
            </a>
            <a className="flex flex-col items-center" href="#">
              <span class="material-symbols-sharp text-xl">shopping_cart</span>
              <p className="text-xs -m-0.5">Cart</p>
            </a>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;