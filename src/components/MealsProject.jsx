import { React, useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

function MealsProject() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemslist}</div>;
}

export default MealsProject;

// add these styles to a indexedDB.css file to style this project

// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }

// .items-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   margin: 10px;
// }

// .card {
//   background: rgb(255, 249, 249);
//   font-size: 12px;
//   color: rgb(68, 68, 68);
//   margin: 10px;
//   padding: 30px;
//   transition: 1s ease;
//   cursor: pointer;
// }

// .card:hover {
//   transform: scale(1.1);
// }

// .content {
//   display: flex;
//   justify-content: space-between;
//   font-family: sans-serif;
//   margin-top: 20px;
// }

// p {
//   font-weight: bold;
// }

// img {
//   border-radius: 5px;
//   height: 200px;
//   width: 300px;
// }
