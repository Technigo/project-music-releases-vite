import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlbumNameContainer = styled.div`
a {
  text-decoration: none;
}

h2 {
  color: white;
  font-family: Helvetica, sans-serif;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
}
`;

export const AlbumName = ({ albumName, externalUrl }) => {
  return (
    <AlbumNameContainer>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <h2>{albumName}</h2>
      </a>
    </AlbumNameContainer>
  );
};

AlbumName.propTypes = {
  albumName: PropTypes.string.isRequired,
  externalUrl: PropTypes.string.isRequired,
};