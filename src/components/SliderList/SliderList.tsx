import React from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'
import { SliderListProps } from './SliderList.types'

const SliderList: React.FC<SliderListProps> = ({ features, setFeatures }) => {
  return (
    <Box marginTop="40px">
      <FormControl marginTop="20px">
        <Flex>
          <FormLabel>Acousticness:</FormLabel>
          <Spacer />
          <Text>{features.acousticness} %</Text>
        </Flex>
        <Slider
          onChange={(value) =>
            setFeatures({ ...features, acousticness: value })
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </FormControl>
      <FormControl marginTop="20px">
        <Flex>
          <FormLabel>Danceability:</FormLabel>
          <Spacer />
          <Text>{features.danceability} %</Text>
        </Flex>
        <Slider
          onChange={(value) =>
            setFeatures({ ...features, danceability: value })
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </FormControl>
      <FormControl marginTop="20px">
        <Flex>
          <FormLabel>Energy:</FormLabel>
          <Spacer />
          <Text>{features.energy} %</Text>
        </Flex>
        <Slider
          onChange={(value) => setFeatures({ ...features, energy: value })}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </FormControl>
      <FormControl marginTop="20px">
        <Flex>
          <FormLabel>Loudness:</FormLabel>
          <Spacer />
          <Text>{features.loudness} %</Text>
        </Flex>
        <Slider
          onChange={(value) => setFeatures({ ...features, loudness: value })}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </FormControl>
      <FormControl marginTop="20px">
        <Flex>
          <FormLabel>Instrumentalness:</FormLabel>
          <Spacer />
          <Text>{features.instrumentalness} %</Text>
        </Flex>
        <Slider
          onChange={(value) =>
            setFeatures({ ...features, instrumentalness: value })
          }
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
      </FormControl>
    </Box>
  )
}

export default SliderList
