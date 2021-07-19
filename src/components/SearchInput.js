import React from "react";

class SearchInput extends React.Component {
  render() {

    return (
      <div className="SearchInput">
        <div className="container">
          <h2>Search for a city</h2>
          <br />
          <form action="./search" method="get">
            <div className="col-6">
              <input type="text" name="search" id="search" className="form-control" />
              <br />
              <button type="submit" className="btn primary-btn">Search</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchInput;