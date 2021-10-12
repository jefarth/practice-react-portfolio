import * as React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Router>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
      </Switch>

    <Footer />
    </Router>
    </>
  )
}

export default App;

