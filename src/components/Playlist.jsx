import "./Playlist.css";

export const Playlist = ({playListName, playListImg, playListLiink})=>{
    return (
        <>
        <li>
          <a className="playlist-name" href={playListLiink}>{playListName}</a>
        </li>
        <li>
          <img className="playList-img" src={playListImg} alt="album cover image" />
        </li>
        </>      
    )

}