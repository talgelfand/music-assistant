import React from 'react'
import { Redirect } from 'react-router'
import { DashboardProps } from './Dashboard.types'
import { Heading } from '@chakra-ui/react'
import LinksList from '../../components/LinksList'

const Dashboard: React.FC<DashboardProps> = ({ isValidSession }) => {
  return (
    <>
      {isValidSession() ? (
        <>
          <Heading textAlign="center" marginTop="40px">
            Welcome to your Music Assistant! ⚡️
          </Heading>
          <LinksList />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default Dashboard
