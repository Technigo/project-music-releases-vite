import AlbumArt from './AlbumArt'
import AlbumTitle from './AlbumTitle'
import AlbumArtist from './AlbumArtist'
import AlbumIcons from './AlbumIcons'

const Album = ({ albumData }) => {
  return (
    <div className="album-card">
      <div className="album-art-container">
        <AlbumArt image={albumData.images[0].url} />
        <AlbumIcons />
        </div>
      <div className="album-title">
        <AlbumTitle name={albumData.name} url={albumData.external_urls.spotify} />
      </div>
      <div className="album-artist"> 
        <AlbumArtist artists={albumData.artists} />
      </div>
    </div>
  )
}

export default Album