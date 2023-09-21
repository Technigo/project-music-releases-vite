import { ArtistComma } from "./ArtistComma.jsx";

//Export 
export const ArtistName = ({ artists }) => {
    console.log(artists);

    return ( //Rendering JSX. Map method.
        <div className="artist-container">
            {artists.map((artist, index) => (
                <div key={artist.id}>
                    <p className="artist-name">
                        <a href={artist.external_urls.spotify} target="_blank" rel="noopener norefferer">
                            {artist.name}
                        </a>
                        <ArtistComma index={index} length={artists.length} />
                    </p>
                </div>
            ))}
        </div>
    );
}