import axios from "axios"

export const getParamValues = (url: any) => {
  return url
    .slice(1)
    .split("&")
    .reduce((prev: any, curr: any) => {
      const [title, value] = curr.split("=")
      prev[title] = value
      return prev
    }, {})
}

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params")!)
    if (params) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${params.access_token}`
    }
  } catch (error) {
    console.log("Error setting auth", error)
  }
}
