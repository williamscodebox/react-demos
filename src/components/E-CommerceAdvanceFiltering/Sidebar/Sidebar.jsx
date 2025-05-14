import React from "react";
import "./Sidebar.css";
import Price from "./Price/Price";
import Catergory from "./Category/Catergory";
import Colors from "./Colors/Colors";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Catergory handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}

export default Sidebar;
