import PropTypes from "prop-types";

export const ArtistName = ({ artists }) => {
  const getArtist = () => {
    const artistInfo = artists.map(({ name, external_urls, id }) => {
      return (
        <span key={id}>
          <a href={external_urls.spotify}>{name}</a>
        </span>
      );
    });
    const startLength = artistInfo.length;
    let index = 1;
    switch (startLength) {
      case 1:
        break;
      case 2:
        artistInfo.splice(1, 0, " & ");
        break;
      default:
        for (let i = 1; i < startLength - 1; i++) {
          artistInfo.splice(index, 0, ", ");
          index = index + 2;
        }
        artistInfo.splice(-1, 0, " & ")
    }
    return artistInfo;
  };

  return <div className="artist-name">{getArtist()}</div>;
};

ArtistName.propTypes = {
  artists: PropTypes.array.isRequired,
};
