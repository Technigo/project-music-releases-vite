
//Export 
export const ArtistName = ({ artists }) => {
    console.log(artists);

    return ( //Rendering JSX. Map method.
        <>
            {artists.map((artist) => (
                <div key={artist.id}>
                    <p className="artist-name">{artist.name}</p>
                </div>
            ))}
        </>
    );
}