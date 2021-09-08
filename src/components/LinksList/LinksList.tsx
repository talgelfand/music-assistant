import React, { ReactNode } from "react"
import { Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import * as Styled from "./LinksList.style"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const LinksList = () => {
  const linksData = {
    titles: ["Favourite tracks", "Favourite artists", "My playlists"],
    descriptions: [
      "View the list of your favourite tracks",
      "View the list of your most preferred artists",
      "Explore the playlists you have created",
    ],
  }

  const linksList: ReactNode[] = []

  for (let i = 0; i < linksData.titles.length; i++) {
    linksList.push(
      <Styled.Item>
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
            <LinkOverlay href="#">{linksData.titles[i]}</LinkOverlay>
            <ArrowForwardIcon color="teal" />
          </Heading>
          <Text>{linksData.descriptions[i]}</Text>
        </LinkBox>
      </Styled.Item>
    )
  }

  return <Styled.List>{linksList}</Styled.List>
}

export default LinksList
