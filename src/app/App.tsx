import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Container } from "@material-ui/core"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import RedirectPage from "../pages/RedirectPage"
import SongData from "../pages/SongData"
import SongsExplorer from "../pages/SongsExplorer"
import ArtistsExplorer from "../pages/ArtistsExplorer"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"

const App: React.FC = () => {
  const [expiryTime, setExpiryTime] = useState(0)

  useEffect(() => {
    let expiryTime
    try {
      expiryTime = JSON.parse(localStorage.getItem("expiry_time") as string) // time when the token expires (ms)
    } catch (error) {
      expiryTime = "0"
    }
    setExpiryTime(expiryTime)
  }, [])

  const isValidSession = () => {
    const currentTime = new Date().getTime() // current time in ms
    const isSessionValid = currentTime < expiryTime

    return isSessionValid
  }

  return (
    <ChakraProvider>
      <Router>
        <Route
          path={[
            "/dashboard",
            "/:artist/:name/:id",
            "/songs-explorer",
            "/artists-explorer",
          ]}
          component={Navbar}
        />
        <Container maxWidth="md">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home isValidSession={isValidSession} {...props} />
              )}
            />
            <Route
              path="/redirect"
              render={(props) => (
                <RedirectPage setExpiryTime={expiryTime} {...props} />
              )}
            />
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard isValidSession={isValidSession} {...props} />
              )}
            />
            <Route path="/:artist/:name/:id" component={SongData} />
            <Route path="/songs-explorer" component={SongsExplorer} />
            <Route path="/artists-explorer" component={ArtistsExplorer} />
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  )
}

export default App
