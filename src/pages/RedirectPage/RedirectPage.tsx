import React, { useEffect } from 'react'
import { RedirectPageProps } from './RedirectPage.types'
import { getParamValues } from '../../utils/functions'
import { fetchData } from '../../utils/api'

const RedirectPage: React.FC<RedirectPageProps> = ({
  setExpiryTime,
  history,
  location,
}) => {
  useEffect(() => {
    try {
      if (location.hash === '') {
        return history.push('/dashboard')
      }

      const access_token = getParamValues(location.hash)

      // @ts-ignore
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000 // when to renew token

      localStorage.setItem('params', JSON.stringify(access_token))
      localStorage.setItem('expiry_time', expiryTime.toString())

      /* Save data about current user */
      const getCurrentUser = async () => {
        const user = await fetchData('https://api.spotify.com/v1/me')
        localStorage.setItem('current_user', user.id)
      }

      getCurrentUser()

      setExpiryTime(expiryTime)
      history.push('/dashboard')
    } catch (error) {
      history.push('/')
    }
  }, [])

  return null
}

export default RedirectPage
