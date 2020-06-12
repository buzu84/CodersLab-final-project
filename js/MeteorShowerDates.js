import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";



const MeteorShowerDates = () => {
  const [events, setEvents] = useState([]);
  const API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${API}/events`)
    .then(response => response.json())
    .then(response => setEvents(response))
  }, []);

  return (
    <div className="container met_shower_dates">
      <ul>
        {events.map(event => {
          return (
            <li key={event.id}>
              <h2 className="event_name">{event.name}</h2>
              <p>{event.date}</p>
              <p><span className="peak_hour>">Godzina szczytu roju meteorytów: </span>{event.peakHour}</p>
              <p>{event.description}</p>
            </li>
          )
        })}
      </ul>
    </div>

  );
}

export default MeteorShowerDates;
