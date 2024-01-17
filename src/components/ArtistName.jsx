import "./Album.css";

export const ArtistName = ({ artistName, artistLink }) => {
    if (artistName.length === 1) {
        return (
            <div className="artist-name">
                <a href={artistLink} target="_blank"><p>{artistName}</p></a>
            </div>
        )

    } else if (artistName.length > 1) {
        return (
            <div className="artist-name">
                <a href={artistLink} target="_blank"><p>{artistName.join(', ')}</p></a>
            </div>
        );
    }
}