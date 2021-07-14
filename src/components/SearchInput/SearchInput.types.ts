interface SearchInputProps {
  placeholder: string
  searchTerm: "track" | "artist"
  setData: React.Dispatch<React.SetStateAction<never[]>>
}

export default SearchInputProps
