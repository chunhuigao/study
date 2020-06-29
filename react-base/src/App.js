import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routers/index'
function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  )
}

export default App
