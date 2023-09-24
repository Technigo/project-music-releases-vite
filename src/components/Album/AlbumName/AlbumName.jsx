// Import the CSS file for this component to apply styles.
import "./AlbumName.css"

// This component takes two props: 'albumName' and 'albumURL', and uses destructuring to extract these props from the props object passed to the component.Then render a <div> element with the class "album-title-link". Inside the <div>, render an <h2> element with an <a> link inside it which is set to the 'albumURL' prop.
export const AlbumName = ({ albumName, albumURL }) => {
  return (
    <div className="album-title-link">
      <h2><a href={albumURL} target="_blank" rel="noopener noreferrer">{albumName}</a></h2>
    </div>
  )
}