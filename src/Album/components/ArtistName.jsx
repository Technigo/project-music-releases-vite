export const ArtistName = ({ artists }) =>
{ 
    //
    //Check how many artists are there in the arr
    const checkArtistNames = ()=>{
        //there is only one artist
        if (artists.length === 1){
            return (
                artists.map((artist)=>(
                    <a key={artist.id} href={artist.external_urls.spotify}>
                        <p className="artist-name">{artist.name}</p>
                    </a>
                ))
            )}else if(artists.length >= 2){
                
        //there are more than one artists
        const moreThenOneArtists = artists.map((artist, index) => (
            <span key={artist.id}>
                <a href={artist.external_urls.spotify}>
                    <p className="artist-name">{artist.name}</p>
                </a>
                {index < artists.length - 2 ? ", " : index === artists.length - 2 ? " & " : ""}
            </span>
        ));

            return (
                <>
                    {moreThenOneArtists}
                </>
            )

             }else{
                return null;
             }
            }
    // 
    //Return the check result       
    return (
        <>
            {checkArtistNames()}
        </>
        )

        };

    
   
