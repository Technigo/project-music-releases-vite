import { Album } from '../Album/Album'
import './Section.css'

// mapped the data.json here instead that on App.jsx and created 2 sections
export const Section = ({ name, filter, data }) => {
  const albumType = filter
  return (
    <div id={name}>
      <h2>{name}</h2>
      <div className="album-container">
        {data.albums.items.map((album, index) => {
          if (album.album_type === albumType) {
            return <Album key={index} album={album} />
          }
        })}
      </div>
    </div>
  )
}
