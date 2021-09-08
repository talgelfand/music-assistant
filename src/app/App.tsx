import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Container } from "@material-ui/core"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import RedirectPage from "../pages/RedirectPage"
import TracksExplorer from "../pages/TracksExplorer"
import ArtistsExplorer from "../pages/ArtistsExplorer"
import PlaylistCreationOptions from "../pages/PlaylistCreationOptions"
import PlaylistGenerator from "../pages/PlaylistGenerator"
import MyPlaylists from "../pages/MyPlaylists"
import PlaylistFromScratch from "../pages/PlaylistFromScratch"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import SinglePlaylist from "../pages/SinglePlaylist"
import Flyout from "../components/Flyout"
import { Provider } from "react-redux"
import store from "../redux/store"

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
      <Provider store={store}>
        <Router>
          <Route
            path={[
              "/dashboard",
              "/:artist/:name/:id",
              "/tracks-explorer",
              "/artists-explorer",
              "/create-playlist",
              "/playlist-generator",
              "/playlist/:id",
              "/my-playlists",
              "/playlist-from-scratch",
            ]}
            component={Navbar}
          />
          <Route
            path={[
              "/dashboard",
              "/:artist/:name/:id",
              "/tracks-explorer",
              "/artists-explorer",
              "/create-playlist",
              "/playlist-generator",
              "/playlist/:id",
              "/my-playlists",
              "/playlist-from-scratch",
            ]}
            component={Flyout}
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
              <Route
                path="/tracks-explorer"
                render={(props) => (
                  <TracksExplorer isValidSession={isValidSession} {...props} />
                )}
              />
              <Route path="/artists-explorer" component={ArtistsExplorer} />
              <Route
                path="/create-playlist"
                component={PlaylistCreationOptions}
              />
              <Route path="/playlist-generator" component={PlaylistGenerator} />
              <Route path="/playlist/:id" component={SinglePlaylist} />
              <Route path="/my-playlists" component={MyPlaylists} />
              <Route
                path="/playlist-from-scratch"
                component={PlaylistFromScratch}
              />
            </Switch>
          </Container>
        </Router>
      </Provider>
    </ChakraProvider>
  )
}

export default App
