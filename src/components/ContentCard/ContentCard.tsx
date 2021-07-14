import React from "react"
import * as Styled from "./ContentCard.style"
import ContentCardProps from "./ContentCard.types"
import { Box, Heading, Text, Link } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Button } from "@chakra-ui/button"
import NoImage from "./no-image.jpeg"

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  subtitle,
  image,
  url,
  content,
}) => {
  return (
    <Styled.Card>
      <Box key={id} borderWidth="1px" borderRadius="lg" height="200px">
        <Styled.CardWrapper>
          <Image
            src={image || NoImage}
            alt={title}
            boxSize="200px"
            objectFit="cover"
            marginRight="20px"
          />
          <Box padding="20px">
            <Heading as="h5" size="md">
              {title}
            </Heading>
            <Text marginTop="10px">{subtitle}</Text>
            <Styled.Link>
              <Link href={url} isExternal color="teal.700">
                Listen on Spotify
              </Link>
            </Styled.Link>
            {content === "song" ? (
              <Button
                colorScheme="blue"
                text="Analyse song"
                marginTop="20px"
                children={
                  <Styled.ButtonLink to={`${subtitle}/${title}/${id}`}>
                    Get data
                  </Styled.ButtonLink>
                }
              />
            ) : null}
          </Box>
        </Styled.CardWrapper>
      </Box>
    </Styled.Card>
  )
}

export default ContentCard
