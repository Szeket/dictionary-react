import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Type a word you are looking for..."
                className="form-control"
                autoFocus="on"
                onChange={handleChange}
                defaultValue={props.defaultKeyword}
              />
              <div className="d-grid gap-2 d-md-block">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outine-primary"
                />
              </div>
            </form>
          </div>
          <Results results={results} />
        </div>

        <footer>
          Coded with{" "}
          <span role="img" aria-label="heart">
            ❤️{" "}
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
  } else {
    load();
    return "Loading";
  }
}
