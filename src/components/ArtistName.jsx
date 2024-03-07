import './ArtistName.css'; 

export const ArtistName = ({artistName,artistLink})=>{
    const clickArtistName = ()=>{
        window.location.href=artistLink
    }

    return (
        <div className = "artist-name-link">
           <p className="artist-name" onClick = {clickArtistName}>{artistName}</p>
        </div>
        
    )
}
//{artistName} is a prop
    // const formatArtistName = (artistName)=>{
    //     if (artistName.length === 1) {
    //         return artistName[0];
    //     } else if (artistName === 2) {
    //         return artistName.join ('&')
    //     } else {
    //         return artistName.slice(0,1).join(',') + artistName.slice(1,2).join('&')
    //     }
    // }