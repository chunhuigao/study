import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home/index'
import HomeMobx from './component/home/indexMobx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home HomeMobx={HomeMobx} />
      </div>
    );
  }
}

export default App;
