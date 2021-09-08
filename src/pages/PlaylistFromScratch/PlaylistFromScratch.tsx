import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react"
import React from "react"

export interface PlaylistFromScratchProps {}

const PlaylistFromScratch: React.FC<PlaylistFromScratchProps> = () => {
  const handleChange = () => {}

  const handleSubmit = () => {}

  return (
    <>
      <Heading textAlign="center" marginTop="40px">
        Create a playlist
      </Heading>
      <form action="">
        <FormControl marginTop="20px">
          <FormLabel>Name:</FormLabel>
          <Input onChange={(e) => handleChange()} required />
        </FormControl>
        <FormControl isRequired marginTop="20px">
          <FormLabel>Description:</FormLabel>
          <Input onChange={(e) => handleChange()} />
        </FormControl>
        <FormControl marginTop="20px">
          <FormLabel>Tracks:</FormLabel>
          <Text>Please choose tracks manually using search</Text>
        </FormControl>
        <Button
          colorScheme="blue"
          display="block"
          margin="auto"
          marginTop="30px"
          onClick={handleSubmit}
          type="submit"
        >
          Create playlist
        </Button>
      </form>
    </>
  )
}

export default PlaylistFromScratch
