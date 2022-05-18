import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApi = "563492ad6f917000010000011a672010c22e4258af0b83106e556d10";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApi}` } })
      .then(handlePexelsResponse);
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
          <Photos photos={photos} />
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
