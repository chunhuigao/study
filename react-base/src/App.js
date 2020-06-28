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
      <Button type="primary">我是谁，我在那？</Button>
    </div>
  )
}

export default App
