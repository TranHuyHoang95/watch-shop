import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
