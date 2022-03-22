import * as weatherTypes from "./weather-types";

export const SearchAction = (data) => {
  return { type: weatherTypes.SEARCH, data: data };
};
export const addToHistoryAction = (data) => {
  return { type: weatherTypes.ADD_TO_HISTORY, data: data };
};
export const clearAction = () => {
  return { type: weatherTypes.CLEAR };
};
