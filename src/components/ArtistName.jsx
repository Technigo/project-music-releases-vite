import './ArtistName.css'; 

export const ArtistName = ({artistName,artistLink,index,length})=>{
    const commaArtistName = (index,length) => {
        if (index === length - 2) {
            return ' & '
        } else if (index < length -2) {
            return ', '
        } else{
            return ' '
        }}
    return (
        <div className = "artist-name-link">
           <a href={artistLink}>{artistName}</a><span className='comma'>{commaArtistName(index,length)}</span>
        </div>  
    )
}