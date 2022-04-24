const initialState = {
  currentTrack: null,
  playlists: [] as any,
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_TRACK':
      return (state = {
        ...state,
        currentTrack: action.payload,
      })
    case 'SET_PLAYLIST': // add a generated playlist to array of playlists
      return (state = {
        ...state,
        playlists: [...state.playlists, action.payload],
      })

    default:
      return state
  }
}

export default reducer
