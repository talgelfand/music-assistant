import axios from 'axios'
import { PostData } from './api.types'
import { setAuthHeader } from './functions'

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
