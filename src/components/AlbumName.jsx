import "./AlbumName.css";

export const AlbumName = ({albumName,albumLink}) =>{
    const clickAlumName = () => {
        window.location.href=albumLink
    }
    return (
       <div className = "album-name">
          <p onClick= {clickAlumName}>{albumName}</p>
       </div>
    )
}


