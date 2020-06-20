import React, {  useEffect } from "react";
import ReactDOM from "react-dom";

const Carousel = () => {
  useEffect(() => {
    const next = document.querySelector(".rightarrow");
    const prev = document.querySelector(".leftarrow");
    const tablicali = document.querySelector(".carusel-content").querySelectorAll( "ul li");
    let indexli = 0;


    next.addEventListener("click", function() {

        tablicali[indexli].classList.remove("visible")
        if (indexli >= tablicali.length-1) {
            indexli =0;
        } else {
            indexli +=1;
        }
        tablicali[indexli].classList.toggle("visible")
    })
    prev.addEventListener("click", function() {

        tablicali[indexli].classList.remove("visible")
        if (indexli <= 0) {
            indexli = tablicali.length-1
        }    else {
            indexli -= 1;
        }
        tablicali[indexli].classList.toggle("visible")
    })
  }, []);
  return (
    <section className="carusel container ">
      <div className="carusel-content pl-30 pr-30">
        <i className="fas fa-arrow-left leftarrow"></i>
        <ul>
          <li className="visible"><h1>Miejsca</h1> Jeśli lubisz oglądać nocne niebo, interesujesz sie astronomia, tu znajdziesz odpowiednie miejsca do oglądania gwiazd gołym okiem... </li>
          <li><h1>Wydarzenia</h1> Jesli chcesz wiedzieć kiedy wybrać się na nocny spektakl deszczu meteorytów...  </li>
          <li><h1>Obrazek dnia</h1> Codziennie nowy NASA Picture of the day oraz baza zdjęć od 1996..</li>
        </ul>
        <i className="fas fa-arrow-right rightarrow"></i>
      </div>
    </section>
  );
}

export default Carousel;
