import axios from 'axios';
import { APP_ID, OPEN_WEATHER_API } from '../constants/weather';

const instance = axios.create({
  baseURL: OPEN_WEATHER_API,
});

const getWeatherByCityCountry = async (city, country) => {
  const endpoint = `/weather?q=${city},${country}&appid=${APP_ID}`;
  const { data } = await instance.get(endpoint);
  return data;
};

export default { getWeatherByCityCountry };
