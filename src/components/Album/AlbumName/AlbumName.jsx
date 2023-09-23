import "./AlbumName.css"

// This component takes a prop named 'albumName' and displays it within an HTML structure. It uses destructuring to extract the 'albumName' prop from the props object passed to the component. The text content of the h2 element is the value of the 'albumName' prop. 
export const AlbumName = ({ albumName, albumURL }) => {
  return (
    <div className="album-title-link">
      <h2><a href={albumURL} target="_blank" rel="noopener noreferrer">{albumName}</a></h2>
    </div>
  )
}

//export default AlbumName