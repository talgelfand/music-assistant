import React from 'react'
import { Redirect } from 'react-router-dom'
import Playlists from '../../components/Playlists'
import { MyPlaylistsProps } from './MyPlaylists.types'

const MyPlaylists: React.FC<MyPlaylistsProps> = ({ isValidSession }) => {
  return <>{isValidSession() ? <Playlists /> : <Redirect to="/" />}</>
}

export default MyPlaylists
