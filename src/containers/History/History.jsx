import "./History.css";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { Table } from "react-bootstrap";

const History = () => {
  let historyState = useSelector((s) => s.weather);
  let counter = 0;

  return (
    <div className="history-page">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Temp</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {historyState ? (
            historyState.history.map((e) => {
              counter++;
              return (
                <tr key={counter}>
                  <td>{counter}</td>
                  <td>{e.location.name}</td>
                  <td>{e.current.temp_c}°C</td>
                  <td>{e.current.condition.text}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default History;
