import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math.js";
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.DoublePi()}</li>
    <li>{pi.TriplePi()}</li>
  </ul>,
  document.getElementById("root")
);
