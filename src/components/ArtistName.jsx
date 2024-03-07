import './ArtistName.css'; 

export const ArtistName = ({artistName,artistLink})=>{
    const clickArtistName = ()=>{
        window.location.href=artistLink
    }
    return (
        <div className = "artist-name-link">
           <p onClick = {clickArtistName}>{artistName}</p>
        </div>
    )
}
