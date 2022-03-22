import { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchAction,
  addToHistoryAction,
} from "../../redux/Reducers/weather/weather-actions";
import "./Search.css";

let RunHttpFlag = true;

export const Search = () => {
  const [state, setState] = useState("London");
  const [refreshState, setrefreshState] = useState(0);

  const dispachNow = useDispatch();
  let weaterState = useSelector((s) => s.weather);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=b480e7a490374b44be472511222103&q=${state}&aqi=no`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          dispachNow(SearchAction(result));
          dispachNow(addToHistoryAction(result));
        },
        (error) => {
          alert(error);
        }
      );
  }, [RunHttpFlag]);

  return (
    <div className="searchBox">
      <h1>Page Search</h1>
      <InputGroup className="mb-3" style={{ marginTop: "25px" }}>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            setState(e.target.value);
            console.log("Set stage changed to" + e.target.value);
          }}
          style={{ textAlign: "center" }}
          placeholder="Enter a city"
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          onClick={() => {
            console.log("Get button clicked");
            RunHttpFlag = !RunHttpFlag;
            setrefreshState(Math.random());
          }}
        >
          Get
        </Button>
      </InputGroup>
      {weaterState?.current?.humidity}
    </div>
  );
};
