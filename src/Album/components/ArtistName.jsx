import PropTypes from "prop-types";
import { Fragment } from "react";

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
                
        //oh no! there are more than one artists
        const moreThenOneArtists = artists.map((artist, index) => (
            <Fragment key={artist.id}>
                <a href={artist.external_urls.spotify}>
                    <p className="artist-name">{artist.name}</p>
                </a>
                {index < artists.length - 2 ? ", " : index === artists.length - 2 ? " & " : ""}
            </Fragment>
        ));

            return (
                <Fragment>
                    {moreThenOneArtists}
                </Fragment>
            )

             }else{
                return null;
             }
            }
    // 
    //Return the check result       
    return (
        <Fragment>
            {checkArtistNames()}
        </Fragment>
        )

        };

    
   

ArtistName.propTypes ={
    artists:PropTypes.array.isRequired
}