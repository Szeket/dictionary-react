import React from "react";
import search from "./search.jpg";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={search} className="logo d-block img-fluid" alt="logo"></img>
          <h1>Dictionary</h1>
        </header>
        <Search defaultKeyword="map" />
      </div>
    </div>
  );
}

export default App;
