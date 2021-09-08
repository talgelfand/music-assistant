import React from "react"
import { Heading } from "@chakra-ui/react"
import PlaylistForm from "../../components/PlaylistForm"

export interface PlaylistGeneratorProps {}

const PlaylistGenerator: React.FC<PlaylistGeneratorProps> = () => {
  return (
    <>
      <Heading textAlign="center" marginTop="40px">
        Generate your own playlist
      </Heading>
      <PlaylistForm />
    </>
  )
}

export default PlaylistGenerator
