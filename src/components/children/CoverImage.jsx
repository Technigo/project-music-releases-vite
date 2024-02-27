import PropTypes from 'prop-types';
import { IconButtons } from './IconButtons';
import styled from 'styled-components';

const CoverImageContainer = styled.div`

/* CoverImage.css */
.cover-image-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.cover-image {
  max-width: 100%;
  height: auto;
  display: block;
  filter: brightness(1);
  transition: filter 0.3s ease;
  /* Add transition for filter property */
}

.cover-image-wrapper:hover .cover-image {
  filter: brightness(0.4);
}

`;

export function CoverImage({ coverImageUrl }) {
  return (
    <CoverImageContainer>
      <div className="cover-image-wrapper">
        {/* Use the cover image URL from the JSON data */}
        <img src={coverImageUrl} alt="Cover Image" className="cover-image" />
        <IconButtons />
      </div>
    </CoverImageContainer>
  );
}

CoverImage.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
};