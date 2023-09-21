import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import "./TripList.css";

function TipsList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  return (
    <div className="trip-list">
      <h1>TripList</h1>
      {isPending && (
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
          </div>
        </div>
      )}
      {error && (
        <div className="container">
          <div className="gif">
            <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
          </div>
          <div className="content">
            <h2 className="main-heading">Page is not found (404)</h2>
          </div>
        </div>
      )}
      <ul>
        {trips &&
          trips.map((trip) => {
            return (
              <li key={trip.title}>
                <h2>{trip.title}</h2>
                <p>{trip.price}</p>
              </li>
            );
          })}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          European trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All trips
        </button>
      </div>
    </div>
  );
}

export default TipsList;
