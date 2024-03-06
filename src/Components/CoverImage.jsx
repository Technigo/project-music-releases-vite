import PropTypes from "prop-types"

export const CoverImage = ({coverImg}) => {
    return (
        <h2>{coverImg}</h2>
    )
}

CoverImage.propTypes ={
    coverImg: PropTypes.string.isRequired
}

export default CoverImage;