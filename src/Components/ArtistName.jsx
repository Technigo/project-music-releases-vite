import PropTypes from "prop-types"
import './Album.css'

export const ArtistName = ({artists}) => {
    return  (
        <div className="artist-names">
            {artists.map(({ id, name}) => {
                return <h3 key={id}>{name}</h3>
            })}
        </div>

    )
}

ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ArtistName;
