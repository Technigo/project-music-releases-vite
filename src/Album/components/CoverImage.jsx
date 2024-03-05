import PropTypes from "prop-types";

export const CoverImage = ({album}) =>{
    return(
        <img src={album.images[0].url} alt={album.name} />
    )
}

CoverImage.propTypes ={
    album:PropTypes.object.isRequired
}