import React, { Component } from 'react';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Homepage from './Homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
class App extends Component {
  onRouteChange = () => {
    this.setState({route: Login});
  }

  render() {	
    return(
    	<div>
        <Router>
          <div>
            <Route path = "/" exact render={
              () => {
                return (
                  <div>
                    <Nav/>
                    <Home/>
                  </div>
                );
              }
            }/>
            <Route path = "/signup" exact render={
              () => {
                return (
                  <div>
                    <Signup/>
                  </div>
                );
              }
            }/>
            <Route path = "/login" exact render={
              () => {
                return (
                  <div>
                    <Login/>
                  </div>
                );
              }
            }/>
            <Route path = "/homepage" exact render={
                () => {
                  return (
                    <div>
                      <Homepage/>
                    </div>
                  );
                }
              }/>
          </div>
        </Router>
      </div>
  	);
  }
}

export default App;
