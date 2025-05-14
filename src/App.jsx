import React, { useState } from "react";
import Recommended from "./components/E-CommerceAdvanceFiltering/Recommended/Recommended.jsx";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Recommended handleClick={handleClick} />
    </>
  );
}

export default App;

// add this styles to a index.css file to style this project

// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
//   font-family: sans-serif;
// }

// a {
//   text-decoration: none;
//   color: rgb(97, 97, 97);
// }

// li {
//   list-style: none;
// }

// .btns {
//   padding: 10px 20px;
//   margin-right: 6px;
//   background: transparent;
//   border: none;
//   border: 0.6px solid #ccc;
//   border-radius: 5px;
//   color: #323232;
//   cursor: pointer;
// }
