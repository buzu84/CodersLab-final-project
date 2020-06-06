import React from "react";
import ReactDOM from "react-dom";


const Footer = props => {
  return (
    <footer ref={props.propRefContact} className="container">
      <div className="flexbox">
        <div className="footerElements"><h3>Lorem ipsum dolor sit.</h3><p>Consectetur adipiscing elit. Sed at bibendum nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> </div>
        <div className="footerElements">
          <h3>Lorem ipsum amet.</h3>
          <ul>
            <li>Sed at bibendum nibh.</li>
            <li>Nullam gravida pulvinar mi.</li>
            <li>Donec ipsum erat.</li>
            <li>Consectetur adipiscing elit.</li>
          </ul>
        </div>
        <div className="footerElements">
          <h3>Badz na biezaco!</h3>
          <form><input type="text" name="email" placeholder=""/><button className="generalButton" type="submit">Wyslij</button></form>
          <div className="socialMedia flexbox">
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="ender">Copyright <span> Astrolabium.pl</span></div>
    </footer>
  );
}

export default Footer;
