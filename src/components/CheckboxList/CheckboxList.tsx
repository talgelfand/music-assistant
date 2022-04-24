import React from 'react'
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Stack,
} from '@chakra-ui/react'
import { CheckboxListProps } from './CheckboxList.types'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

const values = [
  'acoustic',
  'alt-rock',
  'black-metal',
  'blues',
  'classical',
  'country',
  'electronic',
  'grunge',
  'hip-hop',
  'house',
  'indie-pop',
  'jazz',
  'metal',
  'pop',
  'r-n-b',
  'rock',
  'rock-n-roll',
  'soul',
  'techno',
]

const headings = [
  'Acoustic',
  'Alt-rock',
  'Black metal',
  'Blues',
  'Classical',
  'Country',
  'Electronic',
  'Grunge',
  'Hip-hop',
  'House',
  'Indie pop',
  'Jazz',
  'Metal',
  'Pop',
  'RNB',
  'Rock',
  'Rock-n-roll',
  'Soul',
  'Techno',
]

const CheckboxList: React.FC<CheckboxListProps> = ({ data, setData }) => {
  let limitExceeded = false

  const limitChoice = () => {
    if (data.length > 4) {
      limitExceeded = true
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData([...data, e.target.value])
  }

  const checkboxes: ReactJSXElement[] = []

  values.forEach((value, index) => {
    limitChoice()
    checkboxes.push(
      <Checkbox
        key={value}
        value={values[index]}
        onChange={(e) => handleChange(e)}
      >
        {headings[index]}
      </Checkbox>
    )
  })

  return (
    <FormControl isRequired marginTop="20px">
      <FormLabel>Genres (you can choose up to 5 genres):</FormLabel>
      <Stack
        display="grid"
        gridTemplateRows="repeat(5, 1fr)"
        gridAutoFlow="column"
      >
        <CheckboxGroup isDisabled={limitExceeded}>{checkboxes}</CheckboxGroup>
      </Stack>
    </FormControl>
  )
}

export default CheckboxList
