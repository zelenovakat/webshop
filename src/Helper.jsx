function App() {
  const [kids, setKids] = useState(people)

  const [favoriteKids, setFavoriteKids] = useLocalStorage("favoriteKids", [])

  const handleOnClick = name => {
    const updatedKids = [...favoriteKids, name]
    setFavoriteKids(updatedKids)
  }
  const removeFavoriteKids = favoriteChildId => {
    console.log(favoriteChildId)
    const favoriteKidsWithoutOne = favoriteKids.filter(
      favoriteChild => favoriteChild.id !== favoriteChildId
    )
    setFavoriteKids(favoriteKidsWithoutOne)
  }

  const mappedNameOfChildren = kids.map(favoriteKids => {
    return (
      <MainDiv
        key={favoriteKids.id}
        className={favoriteKids.sex === "boy" ? "gender-boy" : "gender-girl"}
        onClick={() => handleOnClick(favoriteKids)}>
        <StyledRow>{favoriteKids.name}</StyledRow>
      </MainDiv>
    )
  })

<StyledButton>
        <Link to={`/trips/${trip.id}/AddEvent`}>Add event</Link>
      </StyledButton>

import React from "react"
import "./App.css"
import Trips from "./pages/Trips"
import SingleTrip from "./pages/SingleTrip/Main"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from "styled-components"
import { ProvideTrips } from "./stores/TripStore"
import NewTrip from "./pages/NewTrip"
import AddEvent from "./pages/AddEvent"
import { ProvideEvents } from "./stores/EventStore"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
    <ProvideTrips>
      <ProvideEvents>
        <Router>
          <div>
            <Switch>
              <Route path="/trips/:tripId/AddEvent">
                <StyledLi>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </StyledLi>
                <AddEvent />
              </Route>
              <Route path="/trips/:tripId">
                <StyledLi>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </StyledLi>
                <SingleTrip />
              </Route>
              <Route path="/newTrip">
                <StyledLi>
                  <Link to="/trips">
                    <FontAwesomeIcon icon={faAngleLeft} /> trips
                  </Link>
                </StyledLi>
                <NewTrip />
              </Route>
              <Route path="/">
                <Trips />
              </Route>
            </Switch>
          </div>
        </Router>
      </ProvideEvents>
    </ProvideTrips>
  )
}

export default App

const StyledLi = styled.li`
  color: white;
  list-style-type: none;
  a {
    color: white;
    text-decoration: none;
  }
`
