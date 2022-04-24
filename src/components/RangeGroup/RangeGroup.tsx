import React from 'react'
import { RangeGroupProps } from './RangeGroup.types'
import * as Styled from './RangeGroup.style'
import { Progress } from '@chakra-ui/progress'
import { Text } from '@chakra-ui/layout'

const RangeGroup: React.FC<RangeGroupProps> = ({ danceability, energy }) => {
  return (
    <Styled.Wrapper>
      <Styled.Text>
        <Text>Danceability</Text>
        <Text>{Math.floor(danceability * 100)} %</Text>
      </Styled.Text>
      <Styled.Range>
        <Progress colorScheme="green" value={danceability * 100} />
      </Styled.Range>
      <Styled.Text>
        <Text>Energy</Text>
        <Text>{Math.floor(energy * 100)} %</Text>
      </Styled.Text>
      <Styled.Range>
        <Progress colorScheme="blue" value={energy * 100} />
      </Styled.Range>
    </Styled.Wrapper>
  )
}

export default RangeGroup
