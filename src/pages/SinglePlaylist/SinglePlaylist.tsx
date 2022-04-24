import React from 'react'
import { Redirect } from 'react-router-dom'
import GeneratedPlaylist from '../../components/GeneratedPlaylist'
import { SinglePlaylistProps } from './SinglePlaylist.types'

const SinglePlaylist: React.FC<SinglePlaylistProps> = ({ isValidSession }) => {
  return <>{isValidSession() ? <GeneratedPlaylist /> : <Redirect to="/" />}</>
}

export default SinglePlaylist
