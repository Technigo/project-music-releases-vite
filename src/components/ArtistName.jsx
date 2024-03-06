import './ArtistName.css'; 

export const ArtistName = ({name,external_url})=>{
    const clickArtistName = ()=>{
        window.location.href=external_url
    }
    return (
        <div className = "artist-name-link">
           <p onClick = {clickArtistName}>{name}</p>
        </div>
    )
}
