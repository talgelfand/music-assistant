export interface ContentCardProps {
  id: string
  title: string
  subtitle: string
  image: string
  url: string
  content: 'track' | 'artist'
  currentTrack: any
  setTrack: Function
}
