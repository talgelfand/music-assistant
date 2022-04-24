import React from 'react'
import { CardsListProps } from './CardsList.types'
import ContentCard from '../ContentCard'

const CardsList: React.FC<CardsListProps> = ({
  searchItems,
  multipleValuesProperty,
  fetchedFromDatabase,
}) => {
  const list = searchItems.map((item: any) => {
    let artistsList: string[] = []
    let genresList: string[] = []

    item[multipleValuesProperty].forEach((arrayItem: any) => {
      if (multipleValuesProperty === 'genres') {
        artistsList.push(arrayItem)
      } else {
        genresList.push(arrayItem.name)
      }
    })

    return (
      <ContentCard
        key={item.id}
        title={item.name}
        subtitle={artistsList.join(', ') || genresList.join(', ')}
        image={
          fetchedFromDatabase
            ? item.image
            : multipleValuesProperty === 'artists'
            ? item.album.images[0]?.url
            : item.images[0]?.url
        }
        url={
          fetchedFromDatabase ? item.linkToSpotify : item.external_urls.spotify
        }
        content={multipleValuesProperty === 'artists' ? 'track' : 'artist'}
        {...item}
      />
    )
  })

  return <>{list}</>
}

export default CardsList
