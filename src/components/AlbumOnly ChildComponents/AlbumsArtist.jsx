export const AlbumsArtist = ({artists, album_type}) => {

    const selectArtist = album_type === "album" ? artists : [];
   
    
      
    const artistNames = selectArtist.map(({name}) => name).join(", ");
    

   
    
        
    return (
        <div>
            <p>{artistNames}</p>
        </div>
    )
}
