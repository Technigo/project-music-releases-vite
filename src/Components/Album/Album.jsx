import { AlbumName } from '../AlbumName/AlbumName'
import { ArtistName } from '../ArtistName/ArtistName'
import { CoverImage } from '../CoverImage/CoverImage'
import style from './Album.module.css'

export const Album = () => {
  return (
    <div {style.container}>
        <AlbumName />
        <ArtistName />
        <CoverImage />
    </div>
  )
}
