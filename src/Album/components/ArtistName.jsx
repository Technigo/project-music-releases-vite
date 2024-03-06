import PropTypes from "prop-types";
import { Fragment } from "react";

export const ArtistName = ({ artists }) =>{
    return (
        <Fragment>
        {artists.map((artist)=>(
            <a key={artist.id} href={artist.external_urls.spotify}>
                <p className="artist-name">{artist.name}</p>
            </a>
        ))}
        </Fragment>
    )
}

ArtistName.propTypes ={
    artists:PropTypes.array.isRequired
}