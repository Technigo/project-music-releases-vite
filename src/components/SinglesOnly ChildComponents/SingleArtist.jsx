export const SingleArtist = ({artists, album_type}) => {

    const selectArtist = album_type === "single" ? artists : [];
   
    
      
    const artistNames = selectArtist.map(({name}) => name).join(", ");
    

   
    
        
    return (
        <div>
            <p>{artistNames}</p>
        </div>
    )
}


//const renderArtistNames = () => artists.map(
    //({name}) => name + ", "
    //);

    // const selectArtist = artists
    //if (album_type === "single")
