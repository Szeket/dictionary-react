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
  function searchWord(event) {
    event.preventDefault();
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

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
          <Results results={results} />
          <div className="col-sm">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
