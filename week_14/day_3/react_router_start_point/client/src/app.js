import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Pricing from './components/Pricing.jsx';
import Pets from './components/Pets.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="Home" component={Home} />
        <Route path="About" component={About} />
        <Route path="Pricing" component={Pricing} />
        <Route path="Pets" component={Pets} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
}
