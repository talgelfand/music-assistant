import React from 'react'
import { connect } from 'react-redux'
import SpotifyPlayer from 'react-spotify-web-playback'
import { PlayerProps } from './Player.types'

const Player: React.FC<PlayerProps> = ({ currentTrack }) => {
  const token = JSON.parse(localStorage.getItem('params')!).access_token

  return (
    <>
      {currentTrack && (
        <SpotifyPlayer
          token={token}
          uris={`spotify:track:${currentTrack}`}
          autoPlay
          styles={{
            color: '#285E61',
            loaderColor: '#319795',
            sliderColor: '#319795',
            sliderHandleColor: '#285E61',
          }}
        />
      )}
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentTrack: state.currentTrack,
  }
}

export default connect(mapStateToProps)(Player)
