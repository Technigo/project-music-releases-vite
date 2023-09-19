export const ArtistName = ({ artists }) => {
    console.log(artists);
    // Functional component that destructures the prop artist, and sets it as the text of the h3 tag representing the artist name.
    return (
        <>
            {artists.map((artist) => (
                <div key={artist.id}>
                    <p className="artist-name">{artist.name}</p>
                </div>
            ))}
        </>
    );
}