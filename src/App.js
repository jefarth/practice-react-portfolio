import * as React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
    </>
  )
}

export default App;

