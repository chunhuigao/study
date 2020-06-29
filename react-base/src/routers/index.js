import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from '../Pages/Home/index'
// import Details from '../Pages/Details/index'

const Home = lazy(() => import('../Pages/Home/index'))
const Details = lazy(() => import('../Pages/Details/index'))
const RouterConfig = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}
export default RouterConfig
