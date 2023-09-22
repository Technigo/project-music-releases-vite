//Import
import { ArtistComma } from "./ArtistComma.jsx";

//Export and takes prop named 'artists' (an array of objects)
export const ArtistName = ({ artists }) => {
    console.log(artists);

    return ( //Rendering JSX. Map method and key (for each artist a div element with a key attribute set to the artist's 'id')
        <div className="artist-container">
            {artists.map((artist, index) => ( //map method to iterate over the 'artists' array and render artist names.
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