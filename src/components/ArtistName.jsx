import "./Album.css";

export const ArtistName = ({ artistName, artistLink }) => {
    return (
        <div className="artist-name">
            <a href={artistLink} target="_blank"><p>{artistName}</p></a>
        </div>
    )
};