// App.js

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
                <Navbar/>

        <Switch>

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/gallery' component={Gallery}/>

        </Switch>

      </div>
    );
  }
}

export default App;