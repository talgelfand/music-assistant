import React, { ReactNode } from 'react'
import { Heading, LinkBox, Text } from '@chakra-ui/react'
import * as Styled from './LinksList.style'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const LinksList = () => {
  const linksData = {
    titles: [
      'Analyse a track',
      'Explore an artist',
      'Generate a playlist',
      'My playlists',
    ],
    descriptions: [
      'Get data about any track',
      'Search for artists',
      'Automatically generate a playlist based on your preferences',
      'Explore the playlists you have created',
    ],
    links: [
      'tracks-explorer',
      'artists-explorer',
      'playlist-generator',
      'my-playlists',
    ],
  }

  const linksList: ReactNode[] = []

  linksData.titles.forEach((title, index) => {
    linksList.push(
      <Styled.Item key={index}>
        <LinkBox
          width="md"
          p="5"
          marginTop="20px"
          borderWidth="1px"
          rounded="md"
        >
          <Heading
            size="md"
            my="2"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to={linksData.links[index]}>{linksData.titles[index]}</Link>
            <ArrowForwardIcon color="teal" />
          </Heading>
          <Text>{linksData.descriptions[index]}</Text>
        </LinkBox>
      </Styled.Item>
    )
  })

  return <Styled.List>{linksList}</Styled.List>
}

export default LinksList
