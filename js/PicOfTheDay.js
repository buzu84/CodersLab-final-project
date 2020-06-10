import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


const PicOfTheDay = () => {
  // const NASAUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
  const [picture, setPicture] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=UqUXmRRFQfJ5lLC3wspd2BXfCzMPRRwqQkoWWGoC`)
    .then(response => response.json())
    .then(json => setPicture(json))
  }, []);

  return (
    <div className="container NASAPic_container">
      <h3 className="NASAHeader" >{picture.title}</h3>
      <img className="NASAPic" src={picture.url} alt={picture.title} />
      <p className="pic_description">{picture.explanation}</p>
    </div>
  );
}

export default PicOfTheDay;
