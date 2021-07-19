import React from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import { api } from "./api";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { date: "", city: "", temperature: "", icon: "", description: "", status: "" };
  }

  componentDidMount() {
    let search = window.location.search;

    if (search === "") {
      window.location.href = "./";
    } else {
      search = window.location.search.slice(1).split("=");

      if (!search[0] === "search") {
        window.location.href = "./";
      } else {
        let apiKey = "";

        api.get(`weather?q=${search[1]}&appid=${apiKey}`)
          .then(response => {
            let data = response.data;

            if (data.cod !== 200) {
              this.setState({ status: "City not found" })
            } else {
              this.setState({
                date: new Date().toLocaleDateString(),
                city: data.name + ", " + data.sys.country,
                temperature: data.main.temp,
                icon: data.weather[0].icon,
                description: data.weather[0].description,
                status: 200
              });
            }
          });
      }
    }
  }

  render() {
    return (
      <div className="weather">
        <Navbar />
        <br />
        <WeatherCard params={this.state} />
      </div>
    )
  }
}

export default Search;