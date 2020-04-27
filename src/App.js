import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ProductGrid from "../src/ProductGrid"
import Cart from "../src/Cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import CheckoutPage from "../src/CheckoutPage"
import CreditCard from "./CreditCard"
import Cash from "./Cash"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/checkoutPage">
          <StyledLi>
            <Link to="/cart">
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Link>
          </StyledLi>
          <CheckoutPage />
        </Route>
        <Route exact path="/cart">
          <StyledLi>
            <Link to="/productGrid">
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Link>
          </StyledLi>
          <Cart />
        </Route>
        <Route path="/cash">
          <Cash />
        </Route>
        <Route exact path="/creditCard">
          <CreditCard />
        </Route>
        <Route path="/">
          <ProductGrid />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

const StyledLi = styled.li`
  color: black;
  list-style-type: none;
  font-size: 20px;
  a {
    color: black;
    text-decoration: none;
  }
`
