import * as weatherTypes from "./weather-types";

const reducerWeather = (state, action) => {
  const resetO = { lastSearthResult: {}, history: [], refresh: 0 };
  if (state === 0) {
    state = resetO;
  }
  let tmp = {};
  switch (action.type) {
    case weatherTypes.SEARCH:
      Object.assign(tmp, state);
      Object.assign(tmp.lastSearthResult, action.data);
      return tmp;

    case weatherTypes.ADD_TO_HISTORY:
      Object.assign(tmp, state);
      tmp.history.push(action.data);
      return tmp;

    case weatherTypes.CLEAR:
      return resetO;

    default:
      return 0;
  }
};

export default reducerWeather;
