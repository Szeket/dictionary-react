import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleError() {
    alert("dunno buddy");
  }

  function searchWord(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse, handleError);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <form onSubmit={searchWord}>
            <input
              type="search"
              placeholder="Type a word you are looking for..."
              className="form-control"
              autoFocus="on"
              onChange={handleChange}
            />
          </form>
          <div className="d-grid gap-2 d-md-block">
            <input
              type="submit"
              value="Search"
              className="btn btn-outine-primary"
            />
          </div>
        </div>

        <Results results={results} />
      </div>

      <footer>
        Coded with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        by
        <a
          href="https://github.com/Szeket/dictionary-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <small>Szeket</small>
        </a>
      </footer>
    </div>
  );
}
