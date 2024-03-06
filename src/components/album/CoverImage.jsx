import PropTypes from "prop-types";


export const CoverImage = ({coverImage}) => {
    return (
        <div>
            <img src={coverImage} />
        </div>
    )
}

CoverImage.propTypes = {
    coverImage: PropTypes.string.isRequired
};

export default CoverImage;