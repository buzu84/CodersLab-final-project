import React from "react";
import ReactDOM from "react-dom";


const About = props => {
  return (
    <section ref={props.propRefAbout} className="about_me container pl-30 pr-30">
      <div className="container_me">
        <div className="author_pic"></div>
        <div className="author_description">
          <h3>AstroFan</h3>
          <p>
            Odkryj tajemnice nieprzeniknionego Wszechswiata razem z autorem Astrolabium...
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
