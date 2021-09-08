import { ReactNode } from "react"

interface SearchInputProps {
  placeholder: string
  searchTerm: "track" | "artist"
  setData: React.Dispatch<React.SetStateAction<never[]>>
  result: ReactNode
}

export default SearchInputProps
