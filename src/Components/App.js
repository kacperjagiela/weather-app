import React from 'react';
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import Forecast from './Forecast';
import CurrentLocationForecast from './CurrentLocationForecast';

//  API 27b52f2d96109ac0a634c200d7092254

const App = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route path='/forecast/:longitude/:latitude' exact component={withRouter(CurrentLocationForecast)} />
      <Route path='/forecast/:city' exact component={withRouter(Forecast)} />
      <Route path='/' component={withRouter(LandingPage)} />
    </Switch>
  </HashRouter>
)
export default App;
