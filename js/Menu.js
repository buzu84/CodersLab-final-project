import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header className="header container">
      <h1 className="logo"><span>Astro</span><span>Labium</span></h1>
      <nav>
        <ul>
          <li>
            <Link className="nav_diff" to="/astrolabium">ZAPLANUJ WYCIECZKI</Link>
          </li>
          <li>
            <a href="#worth_it">DLACZEGO WARTO!</a>
          </li>
          <li>
            <a href="#about_me">O MNIE</a>
          </li>
          <li>
            <a href="#contact">KONTAKT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
