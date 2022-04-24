import React from 'react'
import * as Styled from './ContentCard.style'
import { ContentCardProps } from './ContentCard.types'
import { Box, Heading, Text, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Button } from '@chakra-ui/button'
import NoImage from './no-image.jpeg'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import DataModal from '../DataModal'
import { connect } from 'react-redux'
import { setTrack } from '../../redux/actions'
import { TriangleUpIcon } from '@chakra-ui/icons'

const ContentCard: React.FC<ContentCardProps> = ({
  id,
  title,
  subtitle,
  image,
  url,
  content,
  currentTrack,
  setTrack,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Styled.Card>
      <Box borderWidth="1px" borderRadius="lg" height="200px">
        <Styled.CardWrapper>
          <Image
            src={image || NoImage}
            alt={title}
            boxSize="200px"
            objectFit="cover"
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
            {content === 'track' ? (
              <Styled.ButtonsWrapper>
                <Button onClick={onOpen} colorScheme="blue" marginTop="20px">
                  Analyse track
                </Button>
                <IconButton
                  aria-label="Play track"
                  icon={<TriangleUpIcon transform="rotate(90deg)" />}
                  onClick={() => setTrack(id)}
                />
              </Styled.ButtonsWrapper>
            ) : null}
          </Box>
        </Styled.CardWrapper>
      </Box>
      <DataModal
        trackId={id}
        artist={subtitle}
        name={title}
        openCheck={isOpen}
        closeEvent={onClose}
      />
    </Styled.Card>
  )
}

const mapStateToProps = (state: any) => {
  return {
    currentTrack: state.currentTrack,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTrack: (id: string) => {
      dispatch(setTrack(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentCard)
