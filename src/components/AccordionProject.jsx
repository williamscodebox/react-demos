import { useState } from "react";
import "../index.css";

// Use content javaScript file in the utils folder to make this project work

function AccordionProject({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className="icon">{isActive ? "-" : "+"}</p>
      </div>

      <div className="content">
        {isActive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
}

export default AccordionProject;

//  add these styles to a index.css file to style this project

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   background: rgb(36, 36, 36);
//   color: #fff;
//   font-family: sans-serif;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .container {
//   border: 2px solid white;
// }

// .accordion-card {
//   margin: 20px;
//   padding: 20px;
//   background: rgb(73, 73, 73);
// }

// .header {
//   display: flex;
//   justify-content: space-between;
//   width: 40rem;
// }

// .card-title {
//   display: flex;
//   justify-content: space-between;
//   width: 50rem;
// }

// .icon {
//   font-size: 1.5rem;
//   cursor: pointer;
// }

// p.card-info {
//   width: 30rem;
//   padding: 20px 0;
//   line-height: 1.3;
// }
