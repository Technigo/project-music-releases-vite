import PropTypes from "prop-types"
import './Album.css'

export const ArtistName = ({artists}) => {
    const artistNames = artists.map(artist => artist.name).join(", ");

    return  (
        <div className="artist-names">
            <h3>{artistNames}</h3>
            {/* tog bort detta för att lägga dit join() för att separera artister med , - men vet inte om "id" behövs?
             {artists.map(({ id, name}) => {
                return <h3 key={id}>{artistNames}</h3>
            })} */}
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
