import { PropTypes } from 'prop-types';
import { HoverImage } from './HoverImage';

export const CoverImage = (album) => {
    return (
        <>
            <HoverImage />
            <img src={album.img} className="album-image" alt={album.name} />
        </>
  );
};

CoverImage.propTypes = {
    album: PropTypes.object.isRequired,
  };