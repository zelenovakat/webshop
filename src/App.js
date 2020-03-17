import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ProductGrid from "../src/ProductGrid"

import CheckoutPage from "./CheckoutPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ProductGrid">
          <ProductGrid />
        </Route>
        <Route path="/CheckoutPage">
          <CheckoutPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
