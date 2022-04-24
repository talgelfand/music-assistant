import axios from 'axios'

export const getParamValues = (url: string) => {
  return url
    .slice(1)
    .split('&')
    .reduce((prev: any, curr: string) => {
      const [title, value] = curr.split('=')
      prev[title] = value
      return prev
    }, {})
}

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem('params')!)
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.access_token}`
    }
  } catch (error) {
    console.log('Error setting auth', error)
  }
}
