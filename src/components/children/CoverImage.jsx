import PropTypes from 'prop-types';
import { IconButtons } from './IconButtons';

export function CoverImage({ coverImageUrl }) {
  return (
    <div className="cover-image-wrapper">
      {/* Use the cover image URL from the JSON data */}
      <img src={coverImageUrl} alt="Cover Image" className="cover-image" />
      <IconButtons />
    </div>
  );
}

CoverImage.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
};