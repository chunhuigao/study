import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/hello/hello.js'
import Other from './component/other/other.js'
import Example from './component/example/example.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Other />
        <Example />
      </div>
    );
  }
}

export default App;
