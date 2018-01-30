import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/"> <span className="home-action">Home</span> </Link>
        </li>
        <li>
          <Link to="/about"><span className="about-action">About</span></Link>
        </li>
        <li>
          <Link to="/topics"><span className="about-action">Topics</span></Link>
        </li>
      </ul>

      <hr />

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default App;
