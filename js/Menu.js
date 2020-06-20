import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <header className="header container">
      <h1 className="logo"><span>Astro</span><span>Labium</span></h1>
      <nav>
        <ul>
          <li>
            <Link className="nav_diff" to="/astrolabium">ZAPLANUJ WYCIECZKI</Link>
          </li>
          <li>
            <a onClick={props.propScrollFeatures}>DLACZEGO WARTO!</a>
          </li>
          <li>
            <a onClick={props.propScrollAbout}>CO TO DESZCZ METEORYTÓW?</a>
          </li>
          <li>
            <a onClick={props.propScrollContact}>KONTAKT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
