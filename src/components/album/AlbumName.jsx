import "./AlbumName.css"
import PropTypes from 'prop-types'

export const AlbumName=({name, key})=> {
  return (
    <div id={key}>
            <p className='albumName'>{name}</p>
    </div>
  )
}

AlbumName.PropType={
    name:PropTypes.string.isRequired,
    key:PropTypes.string.isRequired
}