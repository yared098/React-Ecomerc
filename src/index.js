import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function Hello(){
//   return <h2>well come to</h2>
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <Hello/> */}
  </React.StrictMode>
);
