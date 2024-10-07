import PropTypes from "prop-types";
export const ArtistName = ({ artistList }) => {
  return (
    <div className="artist-name-list">
      {artistList
        .map((artist) => (
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="artist-name"
            key={artist.id}
          >
            {artist.name}
          </a>
        ))
        .reduce((current, artist, currentIndex) => [
          current,
          currentIndex === artistList.length - 1 ? " & " : ", ",
          artist,
        ])}
    </div>
  );
};

ArtistName.propTypes = {
  artistList: PropTypes.array.isRequired,
};
