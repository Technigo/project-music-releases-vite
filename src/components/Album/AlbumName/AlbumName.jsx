// Imports the tool 'PropTypes' that helps define and validate data types for the props that gets sent to a component
import PropTypes from 'prop-types'
import "./AlbumName.css"

// This component takes a prop named 'albumName' and displays it within an HTML structure. It uses destructuring to extract the 'albumName' prop from the props object passed to the component. The text content of the h2 element is the value of the 'albumName' prop. 
const AlbumName = ({albumName}) => {
  return (
    <div className="album-title-link">
      <h2>{albumName}</h2>
    </div>
  )
}

// Explains that the type of props that is expected to the component is a string
AlbumName.propTypes = {
    albumName: PropTypes.string.isRequired
}

export default AlbumName