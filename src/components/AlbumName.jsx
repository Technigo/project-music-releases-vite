import "./Album.css";

export const AlbumName = ({ name }) => {
    return (
        <div className="album-name">
            <p>{name}</p>
        </div>
    )
};