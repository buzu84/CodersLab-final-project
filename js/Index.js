import React from "react";
import ReactDOM from "react-dom";

import Menu from './Menu';
import Carousel from './Carousel';
import CallToAction from './CallToAction';
import Features from './Features';
import About from './About';
import Footer from './Footer';
import MeteorShower from './MeteorShower';


export default () => {
    return (
      <>
        <Menu />
        <MeteorShower />
        <Carousel />
        <CallToAction />
        <Features />
        <About />
        <Footer />
      </>
    )
}
