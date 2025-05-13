import React, { useState } from "react";

function Button() {
  const [paragragh, setParagraph] = useState("Press the button");
  const handleClick = () => {
    setParagraph("You clicked the button");
    console.log("Button Clicked");
  };
  return (
    <div>
      <p>{paragragh}</p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export default Button;
