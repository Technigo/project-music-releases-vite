import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  return (
    <div>
      {artists.map((artist, index) => (
        <span className="separator" key={artist.id}>
          <a href={artist.external_urls.spotify}>{artist.name}</a>
          {index === artists.length - 2
            ? " , "
            : index !== artists.length - 1
            ? ", "
            : ""}
        </span>
      ))}
    </div>
  );
};

ArtistName.propTypes = {
  artists: PropTypes.string.isRequired,

};
