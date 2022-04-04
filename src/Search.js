import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  function searchWord(event) {
    event.preventDefault();
  }
  function handleResponse(response) {
    console.log(response.data[0]);
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
          <div className="col-sm">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
