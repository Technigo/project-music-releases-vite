import { ArtistComma } from "./ArtistComma.jsx";

//Export 
export const ArtistName = ({ artists }) => {
    console.log(artists);

    return ( //Rendering JSX. Map method.
        <div className="artist-container">
            {artists.map((artist, index) => (
                <div key={artist.id}>
                    <p className="artist-name">{artist.name} <ArtistComma index={index} length={artists.length} />
                    </p>
                </div>
            ))}
        </div>
    );
}