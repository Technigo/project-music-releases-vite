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
//{artistName} is a prop
    // const formatArtistName = (artistName)=>{
    //     if (artistName.length === 1) {
    //         return artistName[0];
    //     } else if (artistName === 2) {
    //         return artistName.join ('&')
    //     } else {
    //         return artistName.slice(0,1).join(',') + artistName.slice(1,2).join('&')
    //     }
    // 