import React from "react";
import ReactDOM from "react-dom";


const Footer = props => {
  return (
    <footer ref={props.propRefContact} className="container">
      <div className="flexbox">
        <div className="footerElements"><h3>Masz pytania?</h3><p>Skontaktuj się z twórcą Astrolabium <a href="mailto:buzikiewicz.magdalena@gmail.com">adres mail</a></p> </div>
        <div className="footerElements">
          <h3>Przydatne linki:</h3>
          <ul>
            <li><a target="_blank" href="https://spaceplace.nasa.gov/meteor-shower/en/" >NASA Science</a></li>
            <li><a target="_blank" href="https://earthsky.org/astronomy-essentials/earthskys-meteor-shower-guide#what-to-bring" >What to bring?</a></li>
            <li><a target="_blank" href="https://www.darksky.org/our-work/conservation/idsp/" >International Dark Sky Places program</a></li>
            <li><a target="_blank" href="http://astrofan.pl/" >AstroFan</a></li>
          </ul>
        </div>
        <div className="footerElements">
          <h3>Znajdziesz nas na</h3>
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
