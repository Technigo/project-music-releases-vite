import AlbumName from './AlbumName';
import CoverImage from './CoverImage';
import Artist from './Artist';

// Component that renders a cover image, album name and a list of artist that are featured on the album.
const Album = ({
    // The album name.
    name,
    // External url for the album. When clicking this url you will be taken to Spotify.
    externalUrl,
    // The album image.
    coverImage,
    // An array of artists containing an object with artist name and external url link.
    artists,
}) => {
    return (
        <div>
            <CoverImage
                coverImage={coverImage}
            />

            <AlbumName
                name={name}
                externalUrl={externalUrl}
            />
            {/* For each artist display the artist component. */}
            {artists.map((artist, index) => (
                <>
                    <Artist
                        key={artist.id}
                        name={artist.name}
                        externalUrl={artist.externalUrl}
                    />
                    {/* Adding a comma if it is more than one artist. */}
                    {index < artists.length - 1 && (
                        <span>, </span>
                    )}
                </>
            ))}
        </div>
    );
};

export default Album;