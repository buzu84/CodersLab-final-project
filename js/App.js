import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Index from './Index';
import Astro from './Astro';

const App = () => {
  return (
    <HashRouter>
      <div>
         <Switch>
           <Route exact path='/' component={Index} />
           <Route path='/astrolabium' component={Astro} />
         </Switch>
       </div>
     </HashRouter>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
