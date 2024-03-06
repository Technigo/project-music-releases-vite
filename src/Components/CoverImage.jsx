import PropTypes from "prop-types"

export const CoverImage = ({coverImg}) => {
    return (
        <div className="cover-image">
            <img src={coverImg} alt="album cover"/>
            </div>
    )
}

CoverImage.propTypes ={
    coverImg: PropTypes.string.isRequired
}

export default CoverImage;