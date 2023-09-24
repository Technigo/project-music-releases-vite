import "./Album.css";

export const AlbumName = ({ albumName, albumLink }) => {
    return (
        <div className="album-name">
            <a href={albumLink} target="_blank"><p>{albumName}</p></a>
        </div>
    )
};