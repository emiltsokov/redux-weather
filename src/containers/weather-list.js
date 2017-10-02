import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidiity = cityData.list.map(w => w.main.humidity);
    const pressure = cityData.list.map(w => w.main.pressure);
    const {lon, lat} = cityData.city.coord;
    console.log(lon ,lat);

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="orange" units="C" />
        </td>
        <td>
          <Chart data={humidiity} color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={pressure} color="green" units="%" />
        </td>
      </tr> 
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th> 
            <th>Temperature (C)</th> 
            <th>Pressure (hPa)</th> 
            <th>Humidity (%)</th> 
          </tr>  
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function MapStateToProps({weather}){
  return { weather };
}

export default connect(MapStateToProps)(WeatherList)