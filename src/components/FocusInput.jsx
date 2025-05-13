import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Willy";
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus"
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default FocusInput;
