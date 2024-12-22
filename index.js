import React from "react";
import ReactDOM from "react-dom/client";



const myElements = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", null, "prasad"),
  React.createElement("h2", null, "chinna"),
  React.createElement("h3", null, "ram")
);



const MyElements = function () {
  return (
    <>
      <h1 className="heading1">Dasari</h1>
      <h2 className="heading2">Neeraja</h2>
      <h3>ram</h3>
      </>
  );
};


const ParaComponent = function() {
  return <p>Paragraph Element</p>
 
};

const HeadComponent = () => {
  return (
    <div className="title">
      <h1>Dasari</h1>
      <h2>Neeraja</h2>
      <ParaComponent/>
    </div>
  );
};


var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

// rootReact.render(myElements);

// rootReact.render(<MyElements />);

rootReact.render(<HeadComponent></HeadComponent>);