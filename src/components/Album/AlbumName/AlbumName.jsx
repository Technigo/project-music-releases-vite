import "./AlbumName.css"

// This component takes a prop named 'albumName' and displays it within an HTML structure. It uses destructuring to extract the 'albumName' prop from the props object passed to the component. The text content of the h2 element is the value of the 'albumName' prop. 
export const AlbumName = ({ albumName }) => {
  return (
    <div className="album-title-link">
      <h2>{albumName}</h2>
    </div>
  )
}

//export default AlbumName