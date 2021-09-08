import { Heading, LinkBox, LinkOverlay, Text, VStack } from "@chakra-ui/react"
import React from "react"

const PlaylistCreationOptions: React.FC = () => {
  return (
    <VStack marginTop="40px" spacing={8}>
      <LinkBox as="article" width="sm" p="5" borderWidth="1px" rounded="md">
        <Heading size="md" my="2">
          <LinkOverlay href="/playlist-generator">Generate</LinkOverlay>
        </Heading>
        <Text>Automatically generate a playlist based on your music taste</Text>
      </LinkBox>
      <LinkBox as="article" width="sm" p="5" borderWidth="1px" rounded="md">
        <Heading size="md" my="2">
          <LinkOverlay href="/playlist-from-scratch">
            Create from scratch
          </LinkOverlay>
        </Heading>
        <Text>Manually combine a playlist</Text>
      </LinkBox>
    </VStack>
  )
}

export default PlaylistCreationOptions
