import React, {Component} from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Menu from './Menu';
import Carousel from './Carousel';
import CallToAction from './CallToAction';
import Features from './Features';
import About from './About';
import Footer from './Footer';


export default () => {
    return (
      <>
        <Menu />
        <Carousel />
        <CallToAction />
        <Features />
        <About />
        <Footer />
      </>
    )
}
