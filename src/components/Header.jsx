import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

function Header() {
  return (
    <div>
      <h1>Welcome to my website</h1>
      <nav>
        <FaHome />
        <a href="">Home</a>
        <FaCircleInfo />
        <a href="">About</a>
        <IoIosContact />
        <a href="">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
