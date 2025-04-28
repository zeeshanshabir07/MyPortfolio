import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css"; // or "./App.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router> {/* Router should   wrap App here */}
    <App />
  </Router>
);
