import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import Home from './Home';
import Secret from './Secret';
// import Login from './Login';
import Login from './components/pages/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              FAST SYNC
    </Navbar.Brand>
          </Navbar>
          <Jumbotron>
            <h1>Welcome to Fast Sync!</h1>
            <p>
              This is a simple and easy to user oriented Social Media Application. The purpose behind this application is to provide a way to connect with friends, checkout the latest news, or just watch a funny video. There are no likes, follow counts or any influencer driven metrics here.
  </p>
            <p>If this sounds like the social media app you've been waiting for <Link to='/login'>Login!</Link> If you are already apart of our community, <Link to='/login'>Login here!</Link></p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <ul>
            <li><Button variant="primary" className="mr-2">Primary</Button>
              <Link to="/">Home</Link></li>
            <li><Link to="/secret">Secret</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/secret" component={withAuth(Secret)} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
