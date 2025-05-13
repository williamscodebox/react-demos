import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Button from "./components/Button";
import CopyInput from "./components/CopyInput";

function App() {
  return (
    <div style={{ margin: 5, padding: 10 }}>
      <CopyInput />
      {/* <Header />
      <MainContent />
      <Greet></Greet>
      <Button />
      <Footer /> */}
    </div>
  );
}

export default App;
