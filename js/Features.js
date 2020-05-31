import React from "react";
import ReactDOM from "react-dom";


const Features = () => {
  return (
    <section id="worth_it" className="info-section container pl-30 pr-30">
      <div className="info-item">
        <div className="info-box">
          <div className="icon"><i className="fas fa-check"></i></div>
          <h2>Golym okiem</h2>
          <p>
            Sprawdz miejscowki o odpowiedniej ciemnosci wokol Twojego miejsca zamieszkania
          </p>
        </div>
        <div className="info-box">
          <div className="icon"><i className="far fa-clock"></i></div>
          <h2>Wydarzenia</h2>
          <p>
            Badz na biezaco z wydarzeniami na niebie. Deszcze meteorytow i inne.
          </p>
        </div>
        <div className="info-box">
          <div className="icon"><i className="fas fa-align-left"></i></div>
          <h2>Gdy pogoda nie dopisze..</h2>
          <p>
            Skorzystaj z bazy obserwatoriow astronomicznych w Twojej okolicy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
