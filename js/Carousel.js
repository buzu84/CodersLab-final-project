import React from "react";
import ReactDOM from "react-dom";

const Carousel = () => {
  return (
    <section className="carusel container ">
      <div className="carusel-content pl-30 pr-30">
        <i className="fas fa-arrow-left leftarrow"></i>
        <ul>
          <li className="visible"><h1>Miejsca</h1> Jesli chcesz ogladac nocne niebo, interesujesz sie astronomia, tu znajdziesz miejsca do ogladania gwiazd golym okiem... </li>
          <li><h1>Wydarzenia</h1> Jesli chcesz znac najblizsze wydarzenia na niebie dla Twojego polozenia, takie jak deszcze meteorytow </li>
          <li><h1>Inne</h1> oraz wiele innych-w przygotowaniu </li>
        </ul>
        <i className="fas fa-arrow-right rightarrow"></i>
      </div>
    </section>
  );
}

export default Carousel;
