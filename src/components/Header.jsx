import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";

function Header() {
  return (
    <div style={{ paddingBottom: 20 }}>
      <nav
        style={{
          display: "flex",
          width: "100%",

          justifyContent: "space-between",
        }}
      >
        <div>
          <FaHome />
          <a href="">Home</a>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div>
            <FaCircleInfo />
            <a href="">About</a>
          </div>
          <div>
            <IoIosContact />
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
