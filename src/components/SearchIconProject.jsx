import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../index.css";

function SearchIconProject() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
}

export default SearchIconProject;

// add these styles to a indexedDB.css file to style this project

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// section {
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   transition: 0.7s ease;
// }

// button {
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   padding: 10px 20px;
//   background: transparent;
//   cursor: pointer;
// }

// input {
//   padding: 13px 12px;
//   background: transparent;
//   outline: none;
//   border: 1px solid #fff;
//   color: #fff;
//   border-radius: 2px;
//   box-shadow: 2px 2px 2px 1px rgb(35, 35, 35);
// }
