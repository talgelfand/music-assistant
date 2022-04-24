import React from 'react'
import { Heading } from '@chakra-ui/react'
import PlaylistForm from '../../components/PlaylistForm'
import { PlaylistGeneratorProps } from './PlaylistGenerator.types'
import { Redirect } from 'react-router-dom'

const PlaylistGenerator: React.FC<PlaylistGeneratorProps> = ({
  isValidSession,
}) => {
  return (
    <>
      {isValidSession() ? (
        <>
          <Heading textAlign="center" marginTop="40px">
            Generate your own playlist
          </Heading>
          <PlaylistForm />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default PlaylistGenerator
