import React, { useState, useEffect } from 'react'
import CardsList from '../CardsList'
import { Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { database } from '../../firebase'
import LoadingSpinner from '../LoadingSpinner'

const GeneratedPlaylist: React.FC = () => {
  const { id } = useParams() as any

  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('current_user')!
  )
  const [targetPlaylist, setTargetPlaylist] = useState({}) as any

  useEffect(() => {
    database
      .collection('users')
      .doc(currentUser)
      .get()
      .then((querySnapshot) => {
        // @ts-ignore
        querySnapshot.data().playlists.forEach((playlist: any) => {
          if (playlist.id === id) {
            setTargetPlaylist(playlist)
          }
        })
      })

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) return <LoadingSpinner />

  return (
    <>
      <Heading size="lg" textAlign="center" marginTop="40px">
        {targetPlaylist.name}
      </Heading>
      <CardsList
        searchItems={targetPlaylist.tracks}
        multipleValuesProperty="artists"
        fetchedFromDatabase
      />
    </>
  )
}

export default GeneratedPlaylist
