import React, {Component} from "react";
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

class App extends Component {
  render() {
    const activeStyle = {
        border: "2px solid green"
    };
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
}
ReactDOM.render(<App />, document.getElementById("app"));
