import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PicOfTheDay = () => {
  const handleDateFormat = date => {
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    const year = String(date.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${year}-${month}-${day}`;;
  }

  const [picture, setPicture] = useState("");
  const [currentDate, setCurrentDate] = useState(handleDateFormat(new Date()));

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${currentDate}`)
    .then(response => response.json())
    .then(json => setPicture(json))
  }, [currentDate]);

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
        selected={new Date(parseInt(currentDate.split('-')[0]), parseInt(currentDate.split('-')[1]) - 1, parseInt(currentDate.split('-')[2]))}
        onChange={date => setCurrentDate(handleDateFormat(date))}
        minDate={new Date(1996, 0, 1)}
        maxDate={new Date()}
        placeholderText="NASA Picture dostępne od 1.01.1996"
      />
    </div>
  );
}

export default PicOfTheDay;
