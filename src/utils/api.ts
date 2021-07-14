import axios from "axios"
import { setAuthHeader } from "./functions"

export const fetchData = async (url: string) => {
  setAuthHeader()
  const res = await axios.get(url)
  return res.data
}
