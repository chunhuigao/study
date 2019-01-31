import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import MainRoutr from './router/router.jsx'



class App extends React.Component {
  render() {
    return (
    	<div className="App">
			<BrowserRouter>
				<MainRoutr />
			</BrowserRouter>
    	</div>
    );
  }
}

export default App;
