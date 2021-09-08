import axios from "axios"
import { setAuthHeader } from "./functions"

interface PostData {
  name: string
  description: string
  public: boolean
}

export const fetchData = async (url: string) => {
  setAuthHeader()
  const res = await axios.get(url)
  return res.data
}

export const postData = async (url: string, data?: PostData) => {
  setAuthHeader()
  const res = await axios.post(url, data)
  return res.data
}
