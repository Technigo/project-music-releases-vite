import PropTypes from 'prop-types'
import "./CoverImage.css"

const CoverImage = ({coverImage}) => {
    return (
         <div className="coverImage-wrapper">
            <img src={coverImage} alt="Cover" />
        </div>
        )
}

CoverImage.propTypes = {
    coverImage:PropTypes.string.isRequired
}

export default CoverImage