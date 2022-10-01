import "./styles.css";
import React from "react";
import AITECH from "./aitech.png";

export default function App() {
  return <Descktopuser />;
}

function Descktopuser(props) {
  return (
    <div>
      <Headin1 />
    </div>
  );
}
function Headin1() {
  return (
    <div className="container">
      <div className="desktop-recover"></div>
      <div>
        <img src={AITECH} className="img" />
      </div>
      <div className="flex-col">
        <h1 className="Tittle-point">
          <span className="Tittle-body" />
          Heading 1
        </h1>
        <Heading3 />
        <Boton />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="group-0001">
      <div className="title-heading">
        <h2>
          <span /> Heading3
        </h2>
      </div>
      <div className="overlap-group">
        <div className="retangle"></div>
        <p className="loremText">
          <span />
          lorem inspu
        </p>
      </div>
    </div>
  );
}
function Boton() {
  return (
    <div className="Button">
      <div className="Large">
        <span />
        Large
      </div>
    </div>
  );
}
