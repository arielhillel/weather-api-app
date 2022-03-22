import reducerWeather from "./Reducers/weather/weather-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  weather: reducerWeather,
});

export default allReducers;
