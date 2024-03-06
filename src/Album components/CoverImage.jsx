import PropTypes from "prop-types"
import "./coverImage.css"

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