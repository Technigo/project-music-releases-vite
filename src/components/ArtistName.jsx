export const ArtistName = ({ artist }) => {
    // Functional component that destructures the prop artist, and sets it as the text of the h3 tag representing the artist name.
    return (
        <h3 className="artist-name">{artist}</h3>
    );
}