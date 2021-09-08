import { makeStyles, Paper, Tab, Tabs } from "@material-ui/core"
import React from "react"
import { Link } from "react-router-dom"
import MenuProps from "./Menu.types"

const Menu: React.FC<MenuProps> = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  })

  const classes = useStyles()

  return (
    <>
      <Paper className={classes.root}>
        <Tabs textColor="primary" indicatorColor="primary" centered>
          <Tab label={<Link to="/tracks-explorer">Analyse a track</Link>} />
          <Tab label={<Link to="/artists-explorer">Explore an artist</Link>} />
          <Tab label={<Link to="/my-playlists">Create a playlist</Link>} />
        </Tabs>
      </Paper>
    </>
  )
}

export default Menu
