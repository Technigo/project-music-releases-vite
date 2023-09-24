//The AlbumName component formats Album names, adding a delimiter between them when there are multiple artists for a single album.

//The AlbumName component takes three props: name (artist's name), index (position in the list), and totalArtists (total number of artists).
//It uses an inner function called generateDelimiter to decide whether to add a delimiter(" & ") between artist names based on the index and totalArtists.
const ArtistName = ({ name, index, totalArtists }) => {
    const generateDelimiter = (index, length) => {
        if (index < length - 1) {
            return " & "
        }
        return ""
    };

    //The component renders the artist's name followed by the delimiter (if needed) wrapped in a span element.
    return (
        <span>
            {name}
            {generateDelimiter(index, totalArtists)}
        </span>
    )
}

//Export component
export default ArtistName
