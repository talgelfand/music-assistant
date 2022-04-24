import { ReactNode } from 'react'

export interface SearchInputProps {
  placeholder: string
  searchTerm: 'track' | 'artist'
  setData: React.Dispatch<React.SetStateAction<never[]>>
  result: ReactNode
}
