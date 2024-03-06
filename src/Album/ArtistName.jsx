import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  return (
    <div className="artistName">
      <p>
        {" "}
        {artists.map(({ id, name }) => (
          <span key={id}> {name},</span>
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