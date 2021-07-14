import React from "react"
import { Redirect } from "react-router"
import DashboardProps from "./Dashboard.types"
import Navbar from "../../components/Navbar"

const Dashboard: React.FC<DashboardProps> = ({ isValidSession }) => {
  return <>{isValidSession() ? <></> : <Redirect to="/" />}</>
}

export default Dashboard
