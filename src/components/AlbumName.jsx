import "./AlbumName.css";

export const AlbumName = ({albumName,albumLink}) =>{
    return (
        <div className = "album-name">
            <a href={albumLink}>{albumName}</a>
        </div>
    )
}