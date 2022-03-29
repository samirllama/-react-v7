import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 className="header">Adopt me!!</h1>
      <Pet name="BabyCakes" animal="Dog" breed="English Mastiff" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
