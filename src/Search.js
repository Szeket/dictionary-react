import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
          <div className="col-sm">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
