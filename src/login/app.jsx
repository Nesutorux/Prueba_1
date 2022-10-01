import "./styles.css";
import React from "react";
import user from "./User.png";
import aitech from "./aitech.png";

export default function App() {
  return <DescktopLogin />;
}
function DescktopLogin(props) {
  return (
    <div>
      <Container />
    </div>
  );
}
function Container(Props) {
  return (
    <div className="container-page">
      <div className="desktop-log screen"></div>
      <div className="flex-col">
        <img src={user} className="imagen" />
        <Ttitle1 />
        <Tittle2 />
        <Terminos />
      </div>
      <img src={aitech} className="empresa" />
    </div>
  );
}

function Ttitle1() {
  return (
    <div className={`group0001 ${groupdata || ""}`}>
      <h1 className="tittle">
        <span className="Span-1" />
        Heading 3
      </h1>
      <div className="overLap">
        <div className="rectangle">
          <p className="lorem">
            <span className="text" />
            lorem impsu
          </p>
        </div>
      </div>
    </div>
  );
}
function Tittle2() {
  return (
    <div className={`group0001 ${groupdata || ""}`}>
      <h1 className="tittle">
        <span className="Span-1" />
        Heading 3
      </h1>
      <div className="overLap">
        <div className="rectangle">
          <p className="lorem">
            <span className="text" />
            lorem impsu
          </p>
        </div>
      </div>
    </div>
  );
}
function Terminos() {
  return (
    <div className="flexr-row">
      <div className="selectors">
        <div className="elipsefull">
          <div className="elipse" />
        </div>
        <div className="radiobutton">
          <snap />
          Radio Button
        </div>
      </div>
      <div className="lorem lorem1">
        <snap />
        Lorem impsu
      </div>
      <div className="button">
        <div className="large">
          <snap /> Large
        </div>
      </div>
    </div>
  );
}
function groupdata() {
  <div className="group001-data"></div>;
}
