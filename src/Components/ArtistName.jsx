import PropTypes from "prop-types"
import './Album.css'

export const ArtistName = ({artists}) => {
    return  (
        <div className="artist-names">
            {artists.map (({ id, name, external_urls}) => (
                <a key={id} href={external_urls.spotify} className="artist-link">
                    <h3>{name}</h3>
                </a>
            ))}
        </div>

    )
}

ArtistName.propTypes = {
    artists: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default ArtistName;


