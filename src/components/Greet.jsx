import React from "react";

const Greet = () => {
  const name = "John";
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <div>
      <h1>Greetings from: {name}</h1>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Greet;
