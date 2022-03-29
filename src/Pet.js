import React from "react";

const Pet = (props) => {
    return React.createElement("div", { className: "pet-list-section" }, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h2", {}, props.breed),
    ]);
  };
  
export default Pet;