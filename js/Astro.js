import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import FinalMap from './Map';
import MeteorShowerDates from './MeteorShowerDates';



export default () => {
  return (
    <>
      <FinalMap />
      <MeteorShowerDates />
    </>
  )
}
