import './ArtistName.css'; 

export const ArtistName = ({artistName,artistLink,index,length})=>{
    const clickArtistName = ()=>{
        window.location.href=artistLink
    }
    const commaArtistName = (index,length) => {
        if (index === length - 2) {
            return ' &'
        } else if (index < length -2) {
            return ' ,'
        } else{
            return ' '
        }}
    return (
        <div className = "artist-name-link">
           <p onClick = {clickArtistName}>{artistName}{commaArtistName(index,length)}</p>
        </div>  
    )
}
