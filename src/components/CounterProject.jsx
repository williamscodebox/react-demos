import { React, useState } from "react";
// import "../index.css";

function CounterProject() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </div>
    </div>
  );
}

export default CounterProject;

// add these styles to a indexedDB.css file to style this project

// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }

// body {
//   background: #000;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: #fff;
// }

// .container .number {
//   font-size: 6rem;
// }

// .btns-container {
//   width: 40rem;
//   display: flex;
//   justify-content: space-around;
//   margin-top: 5rem;
// }

// .increment {
//   padding: 10px 20px;
//   border-radius: 100px;
//   font-size: 2rem;
//   background: #141517;
//   color: #fff;
//   cursor: pointer;
// }
