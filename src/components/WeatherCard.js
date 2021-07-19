import React from "react";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bg: "", color: "" }
  }

  componentDidMount() {
    let hours = new Date().getHours();

    let bg = ((hours < 12) ? '#68aae8' : '#152752');
    let color = ((hours < 12) ? '#000' : '#fff');
    this.setState({ bg, color });
  }

  render() {
    let params = this.props.params;
    let style = {
      backgroundColor: this.state.bg,
      color: this.state.color
    };
    let element;

    if (params.status === 200) {
      element =
        <div className="weather-card" style={style}>
          <div className="row">
            <h6>{params.date}</h6>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <h3>{params.temperature} K</h3>
              </div>
              <div className="row">
                <h5 style={{ textTransform: "capitalize" }}>{params.description}</h5>
              </div>
            </div>
            <div className="col">
              <img src={`http://openweathermap.org/img/w/${params.icon}.png`} alt="Weather icon" style={{ width: '100px' }} />
            </div>
          </div>
        </div>;
    } else {
      element =
        <div className="status">
          <h4>City not found</h4>
        </div>;
    }

    return (
      <div className="container">
        <h2>Weather in {params.city}</h2>
        <br /><br />
        {element}
      </div>
    )
  }
}

export default WeatherCard;