export const AlbumName = ({ name, albumUrl }) => {
    // Functional component that destructures the prop album, and sets it as the text of the a tag representing the album title.
    return (
        <a className="album-title" href={albumUrl.spotify}>{name}</a>
      )
}