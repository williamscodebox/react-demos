import React, { useState } from "react";
import Recommended from "./components/E-CommerceAdvanceFiltering/Recommended/Recommended.jsx";
import "./index.css";
import Sidebar from "./components/E-CommerceAdvanceFiltering/Sidebar/Sidebar.jsx";
import Products from "./components/E-CommerceAdvanceFiltering/Products/Products.jsx";
import Navigation from "./components/E-CommerceAdvanceFiltering/Navigation/Nav.jsx";
import products from "./components/E-CommerceAdvanceFiltering/db/data.jsx";
import Card from "./components/E-CommerceAdvanceFiltering/Components/Card.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
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
