import React from "react"
import { Redirect } from "react-router"
import DashboardProps from "./Dashboard.types"
import LinksList from "../../components/LinksList"

const Dashboard: React.FC<DashboardProps> = ({ isValidSession }) => {
  return <>{isValidSession() ? <LinksList /> : <Redirect to="/" />}</>
}

export default Dashboard
