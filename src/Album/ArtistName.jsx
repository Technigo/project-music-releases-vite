import PropTypes from "prop-types";

export const ArtistName = ({ artists, }) => {
  return (
    <div className="artistName">
      <p>
        {artists.map(({ id, name, external_urls }) => (
          <a key={id} href={external_urls.spotify}>
            {name},
          </a>
        ))}
      </p>
    </div>
  );
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};

ArtistName.defaultProps = {
  components: "Components are missing",
};