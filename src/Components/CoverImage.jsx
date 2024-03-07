import PropTypes from "prop-types"
import './Album.css'

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