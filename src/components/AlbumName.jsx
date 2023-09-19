export const AlbumName = ({ name }) => {
    // Functional component that destructures the prop album, and sets it as the text of the h2 tag representing the album title.
    return (
        <div className="album-title">{name}</div>
      )
}