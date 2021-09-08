import { fetchData } from "../utils/api"

const setUser = () => {
  let userName = ""

  const getUser = async () => {
    const user = await fetchData("https://api.spotify.com/v1/me")
    console.log(user.display_name)
    userName = user.display_name
    return userName
  }

  getUser()

  return { type: "SET_USER", payload: userName }
}

const setTrack = (id: any) => {
  return {
    type: "SET_TRACK",
    payload: id,
  }
}

const setPlaylist = (id: any, playlist: any, name: any) => {
  return {
    type: "SET_PLAYLIST",
    payload: { id: id, playlist: playlist, name: name },
  }
}

const setPlaylistName = (name: string) => {
  return {
    type: "SET_NAME",
    payload: name,
  }
}

export { setUser, setTrack, setPlaylist, setPlaylistName }
