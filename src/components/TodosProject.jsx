import { React, useState } from "react";
import "../index.css";

// Needs better process of generating unique IDs
// This is a simple way to generate unique IDs, but it is not foolproof.
// In a real-world application, you would want to use a more robust method of generating unique IDs, such as uuid or a library like nanoid.
function generateId() {
  return Math.floor(Math.random() * 10);
}

function TodosProject() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="test"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosProject;

// add these styles to a indexedDB.css file to style this project

// * {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }

// body {
//   background: #f5f9eb;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .container {
//   background: #fcfff3;
//   padding: 50px;
// }

// input {
//   padding: 15px;
//   border: none;
//   outline: none;
//   background: #f5f9eb;
//   width: 300px;
//   margin-right: 10px;
// }

// button {
//   border-radius: 100px;
//   background: #454545;
//   padding: 5px;
//   outline: none;
//   border: none;
//   color: #fff;
//   padding: 10px 20px;
//   cursor: pointer;
// }

// .todos-list {
//   margin-top: 3rem;
// }

// .todo {
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #f5f9eb;
//   padding: 7px 20px;
//   margin: 10px;
//   font-family: sans-serif;
// }

// .close {
//   padding: 5px 10px;
//   cursor: pointer;
// }
