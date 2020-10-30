import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";
import CP from "./CP";
import { Router, Link } from "@reach/router";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Home path="/" /> */}
        <CP path="/" />
      </Router>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
