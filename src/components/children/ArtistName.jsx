import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtistContainer = styled.div`
/* ArtistName */
.artist-name a {
  text-decoration: none;
  color: #a0a0a0;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;

  /* Add underline when the h3 is hovered */
  &:hover {
    text-decoration: underline;
  }
}

.artist-name {
  color: #a0a0a0;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
}
`;

export const ArtistName = ({ artistName }) => {
  const allArtists = artistName.length;

  return (
    <ArtistContainer>
      {artistName.map((artist, index) => (
        <span key={artist.id} className="artist-name">
          {allArtists > 1 && allArtists < 3 && index !== 0 && " & "}
          {allArtists > 2 && index !== 0 && ", "}
          <a
            className="artist-link"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist.name}
          </a>
        </span>
      ))}
    </ArtistContainer>
  );
};



ArtistName.propTypes = {
  artistName: PropTypes.array.isRequired,
};