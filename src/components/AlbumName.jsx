export const AlbumName = ({ album }) => {
    // Functional component that destructures the prop album, and sets it as the text of the h2 tag representing the album title.
    return (
        <h2 className="album-title">{album}</h2>
    );
}