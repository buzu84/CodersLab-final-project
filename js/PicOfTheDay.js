import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PicOfTheDay = () => {
  const [picture, setPicture] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  // const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${currentDate}`)
    .then(response => response.json())
    .then(json => setPicture(json))
  }, [currentDate]);

  // const changeDate = e => {
  //   e.preventDefault();
  //   let dateFromInput = document.getElementById('pic_date').value;
  //   const validationErrors = validate();
  //   if (validationErrors.length !== 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     setCurrentDate(dateFromInput);
  //     setErrors([]);
  //   }
  // };

  // const validate = () => {
  //   const date = document.getElementById('pic_date').value;
  //   const validationErrors = [];
  //   const regEx = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
  //   if (!date.match(regEx)) {
  //     validationErrors.push('Podaj datę w formacie YYYY-MM-DD')
  //   }
  //     return validationErrors;
  // }

  return (
    <div className="container NASAPic_container">
      <h3 className="NASAHeader" >{picture.title}</h3>
      {picture.media_type === "image" ? (
        <img
        className="NASAPic"
        src={picture.url}
        alt={picture.title} />
      ) : (
        <iframe
        title="space-video"
        src={picture.url}
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photo NASAPic"
        />
      )}
      <p className="pic_description">{picture.explanation}</p>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        selected={new Date()}
        onChange={date => setCurrentDate(date.toISOString().split('T')[0])}
        minDate={new Date("31/5/1996")}
        maxDate={new Date()}
        placeholderText="NASA Picture dostępne od 31.05.1996"
      />
    </div>
  );
}

export default PicOfTheDay;
