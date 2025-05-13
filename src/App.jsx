import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Greet></Greet>
      <Footer />
    </div>
  );
}

export default App;
