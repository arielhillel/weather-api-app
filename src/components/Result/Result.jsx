import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchAction,
  clearAction,
} from "../../redux/Reducers/weather/weather-reducer";
import "./Result.css";
export const Result = () => {
  let weaterState = useSelector((s) => s.weather);
  if (weaterState === 0) {
    return (
      <div className="resultCard">
        <Card className="card-info">
          <Card.Img
            variant="top"
            src="https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World"
          />
          <Card.Body>
            <Card.Title>There is nothing to show !</Card.Title>
            <img
              src={weaterState?.lastSearthResult?.current?.condition?.icon}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
  return (
    <div className="resultCard">
      <Card className="card-info">
        <Card.Img
          variant="top"
          src="https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World"
        />
        <Card.Body>
          <Card.Title>
            {weaterState?.lastSearthResult?.location?.name}
            <br />
            <br />
            <img
              src={weaterState?.lastSearthResult?.current?.condition?.icon}
            />
            <br />
            {Math.round(weaterState?.lastSearthResult?.current?.temp_c)}°C{" "}
          </Card.Title>
          <Card.Text>
            {weaterState?.lastSearthResult?.location?.region}
            <br />
            {weaterState?.lastSearthResult?.location?.country}
            <br />
            Humidity: {weaterState?.lastSearthResult?.current?.humidity}%
            <br />
            Cloud: {weaterState?.lastSearthResult?.current?.cloud}
          </Card.Text>
          <Button variant="primary">Share Location </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
