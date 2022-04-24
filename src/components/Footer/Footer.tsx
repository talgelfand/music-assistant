import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import { SocialLink } from './Footer.style'

const DataModal: React.FC = () => {
  return (
    <Box
      bg="teal.900"
      w="100%"
      p={10}
      color="white"
      position="absolute"
      bottom="0px"
      textAlign="center"
      marginTop="50px"
    >
      <Text fontWeight="bold" fontSize="18px">
        Created by Tal Gelfand
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
        gridGap="30px"
      >
        <SocialLink href="https://www.linkedin.com/in/tal-gelfand-8160ab21a/">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/taljgelfand/">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://github.com/talgelfand">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/taljgelfand/">
          <FaInstagram />
        </SocialLink>
      </Flex>

      <Flex justifyContent="center" alignItems="center" marginTop="25px">
        <Text marginRight="15px">Powered by Spotify API</Text>
      </Flex>
    </Box>
  )
}

export default DataModal
