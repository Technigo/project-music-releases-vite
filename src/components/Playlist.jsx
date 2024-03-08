export const Playlist = ({playListName, playListImg, playListLiink})=>{
    return (
        <>
        <li className="playlist-name">
          <a href={playListLiink}>{playListName}</a>
        </li>
        <li className="playList-img">
          <img src={playListImg} alt="album cover image" />
        </li>
        </>      
    )

}