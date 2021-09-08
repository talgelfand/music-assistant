import React, { useEffect } from "react"
import RedirectProps from "./RedirectPage.types"
import { getParamValues } from "../../utils/functions"
import { setUser } from "../../redux/actions"
import { connect } from "react-redux"

const RedirectPage: React.FC<RedirectProps> = ({
  setExpiryTime,
  history,
  location,
  setUser,
}) => {
  useEffect(() => {
    try {
      if (location.hash === "") {
        return history.push("/dashboard")
      }

      const access_token = getParamValues(location.hash)

      // @ts-ignore
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000 // when to renew token

      localStorage.setItem("params", JSON.stringify(access_token))
      localStorage.setItem("expiry_time", expiryTime.toString())

      setUser()

      setExpiryTime(expiryTime)
      history.push("/dashboard")
    } catch (error) {
      history.push("/")
    }
  }, [])

  return null
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUser: () => {
      dispatch(setUser())
    },
  }
}

export default connect(mapDispatchToProps)(RedirectPage)
