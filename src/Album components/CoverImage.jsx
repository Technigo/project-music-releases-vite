import PropTypes from "prop-types"

export const CoverImage = ({ coverImage }) => {
    return (
      <div className="cover">
        <img src={coverImage} />
      </div>
    )
  }
  
  CoverImage.propTypes = {
    coverImage: PropTypes.string.isRequired,
  }