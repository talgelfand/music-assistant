import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ChakraProvider, Container } from '@chakra-ui/react'
import store from '../redux/store'

import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import RedirectPage from '../pages/RedirectPage'
import TracksExplorer from '../pages/TracksExplorer'
import ArtistsExplorer from '../pages/ArtistsExplorer'
import PlaylistGenerator from '../pages/PlaylistGenerator'
import MyPlaylists from '../pages/MyPlaylists'
import Navbar from '../components/Navbar'
import SinglePlaylist from '../pages/SinglePlaylist'

const App: React.FC = () => {
  const [expiryTime, setExpiryTime] = useState(0)

  useEffect(() => {
    let expiryTime
    try {
      expiryTime = JSON.parse(localStorage.getItem('expiry_time') as string) // time when the token expires (ms)
    } catch (error) {
      expiryTime = '0'
    }
    setExpiryTime(expiryTime)
  }, [])

  const isValidSession = () => {
    const currentTime = new Date().getTime() // current time in ms
    const isSessionValid = currentTime < expiryTime

    return isSessionValid
  }

  return (
    <div className="App">
      <ChakraProvider>
        <Provider store={store}>
          <Router>
            <Navbar isValidSession={isValidSession} />
            <Container maxW="container.lg">
              <div className="main-content">
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
                      <TracksExplorer
                        isValidSession={isValidSession}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/artists-explorer"
                    render={(props) => (
                      <ArtistsExplorer
                        isValidSession={isValidSession}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/playlist-generator"
                    render={(props) => (
                      <PlaylistGenerator
                        isValidSession={isValidSession}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/playlist/:id"
                    render={(props) => (
                      <SinglePlaylist
                        isValidSession={isValidSession}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/my-playlists"
                    render={(props) => (
                      <MyPlaylists isValidSession={isValidSession} {...props} />
                    )}
                  />
                </Switch>
              </div>
            </Container>
          </Router>
        </Provider>
      </ChakraProvider>
    </div>
  )
}

export default App
