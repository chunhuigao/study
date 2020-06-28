import React, { lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
// import Home from '../Pages/Home/index'
// import Details from '../Pages/Details/index'

const Home = lazy(() => import('../Pages/Home/index'))
const Details = lazy(() => import('../Pages/Details/index'))
const RouterConfig = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
      </Switch>
    </HashRouter>
  )
}
export default RouterConfig
