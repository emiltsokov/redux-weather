import axios from 'axios';

const API_KEY = '227154ac2acdb28ec356eed25ee042f0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}


export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},bg`;
  const request = axios.get(url);
  // fetch(url, {
  //   method: 'get'
  // }).then(function(response) {
  //   console.log(response);
  // }).catch(function(err) {
  //   console.log(err);
  // });
  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}