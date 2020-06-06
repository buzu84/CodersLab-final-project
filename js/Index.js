import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Menu from './Menu';
import Carousel from './Carousel';
import CallToAction from './CallToAction';
import Features from './Features';
import About from './About';
import Footer from './Footer';
import MeteorShower from './MeteorShower';


export default () => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const myRefFeatures = useRef(null);
  const executeScrollFeatures = () => scrollToRef(myRefFeatures);
  const myRefAbout = useRef(null);
  const executeScrollAbout = () => scrollToRef(myRefAbout);
  const myRefContact = useRef(null);
  const executeScrollContact = () => scrollToRef(myRefContact);
    return (
      <>
        <Menu propScrollFeatures={executeScrollFeatures} propScrollAbout={executeScrollAbout} propScrollContact={executeScrollContact}/>
        <MeteorShower />
        <Carousel />
        <CallToAction />
        <Features propRefFeatures={myRefFeatures} />
        <About propRefAbout={myRefAbout}/>
        <Footer propRefContact={myRefContact}/>
      </>
    )
}
