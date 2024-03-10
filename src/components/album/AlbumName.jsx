import "./AlbumName.css"
import PropTypes from 'prop-types'

export const AlbumName=({name, key,external_urls})=> 
  { 
  const albumUrls = external_urls.spotify 
  return (
    <div id={key} className="albumInfo">
      
      <a href={albumUrls} target="_blank" className='albumName'>{name}</a>
    </div>
  )
}

AlbumName.PropType={
  name:PropTypes.string.isRequired,
  key:PropTypes.string.isRequired
}