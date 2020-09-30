import React from "react";
import "./App.scss";
import Navbar from "./components/navbar";

import Main from "./components/main";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
