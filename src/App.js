import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './componets/layout/NavBar/Navbar';
import SuperHeros from './componets/layout/SuperHeroHome/SuperHeros';
import Battle from './componets/layout/Battle/Battle';
import Profile from './componets/layout/Profile/profile';
import HeroState from './componets/Context/Heros/HeroState';

const App = () => (
  <HeroState>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path='/character/:id' component={Profile} />
          <Route path='/battle' component={Battle} />
          <Route path='/' component={SuperHeros} />
          <Redirect from='/' exact to='/home' />
        </Switch>
      </>
    </Router>
  </HeroState>
);

export default App;
