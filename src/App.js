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
          <h1>Panda Dictionary</h1>
        </header>
        <Search defaultKeyword="panda" />
      </div>
    </div>
  );
}

export default App;
