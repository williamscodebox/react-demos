import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Greet></Greet>
      <ProductInfo />
      <Footer />
    </div>
  );
}

export default App;
