import PropTypes from "prop-types";


export const ArtistName = ({artistName,artistURL}) => {
    return (
        <div>
            <a href={artistURL}>
                <h3>{artistName}</h3>
            </a>
        </div>
    );
}

ArtistName.propTypes = {
    artistName: PropTypes.string.isRequired,
    artistURL: PropTypes.string.isRequired
};

export default ArtistName;




