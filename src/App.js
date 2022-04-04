import React from "react";
import panda from "./panda.jpg";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={panda} className="logo d-block img-fluid" alt="logo"></img>
        </header>
        <Search />
      </div>
    </div>
  );
}

export default App;
