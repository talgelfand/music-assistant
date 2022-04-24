const setTrack = (id: string) => {
  return {
    type: 'SET_TRACK',
    payload: id,
  }
}

const setPlaylist = (id: string, playlist: any, name: string) => {
  return {
    type: 'SET_PLAYLIST',
    payload: { id: id, playlist: playlist, name: name },
  }
}

export { setTrack, setPlaylist }
