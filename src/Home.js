import React from "react";
import Navbar from "./components/Navbar";
import SearchInput from "./components/SearchInput";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <br />
        <SearchInput />
      </div>
    )
  }
}

export default Home;