
// A functional component to abstract the AlbumName and a link to the album through an object using the props albumName and externalUrl
const AlbumName = ({albumName, externalUrl}) => { 
  return (
    <div className="album-name">
        <h2>
          {/* As a security measure, inserting the external link to be opened in a new tab without granting the new browsing context access to the document/page that opened it. The 'noreferrer' keeps the external site from knowing that a link was included to their material on the website. */}
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
          {albumName}
          </a>
        </h2>
      </div>
  ) 
}
//Exporting the component to be reused.
export default AlbumName