import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import SongDataProps from "./SongData.types"
import { fetchData } from "../../utils/api"
import DataTable from "../../components/DataTable"
import RangeGroup from "../../components/RangeGroup"
import { Heading } from "@chakra-ui/layout"

const SongData: React.FC<SongDataProps> = () => {
  const { artist, name, id } =
    useParams<{ artist: string; name: string; id: string }>()
  const [songData, setSongData] = useState({} as any)

  useEffect(() => {
    const fetchSongData = async () => {
      const result = await fetchData(
        `https://api.spotify.com/v1/audio-features/${id}`
      )
      setSongData(result)
    }

    fetchSongData()
  }, [])

  return (
    <>
      <Heading
        textAlign="center"
        marginTop="40px"
      >{`${artist} - ${name}`}</Heading>
      <DataTable {...songData} />
      <RangeGroup {...songData} />
    </>
  )
}

export default SongData
