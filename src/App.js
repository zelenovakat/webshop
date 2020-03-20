import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductGrid from "../src/ProductGrid"
import Cart from "../src/Cart"
// import CheckoutPage from "./CheckoutPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/productGrid">
          <ProductGrid />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
