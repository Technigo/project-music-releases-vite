import { PropTypes } from 'prop-types';
import { HoverOverlay } from './HoverOverlay';

export const CoverImage = ({ img, name, withHover }) => {
  return (
    <div className="image-container">
      {withHover ? <HoverOverlay /> : <></>}
      <img src={img} className="album-image" alt={name} />
    </div>
  );
};

CoverImage.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  withHover: PropTypes.bool,
};
