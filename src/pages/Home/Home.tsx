import React from "react"
import { Redirect } from "react-router-dom"
import HomeProps from "./Home.types"
import { Typography } from "@material-ui/core"
import SoundAnimation from "../../components/SoundAnimation"
import { Heading } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"

const Home: React.FC<HomeProps> = ({ isValidSession }) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env

  const handleLogin = () => {
    window.location.href = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
  }

  return (
    <>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <>
          <Typography variant="h3" align="center"></Typography>
          <Heading fontSize="40px" textAlign="center" marginTop="50px">
            Welcome to your Music Assistant
          </Heading>
          <Button
            display="block"
            margin="auto"
            marginTop="100px"
            colorScheme="blue"
            onClick={handleLogin}
          >
            Login to Spotify
          </Button>
          <SoundAnimation />
        </>
      )}
    </>
  )
}

export default Home