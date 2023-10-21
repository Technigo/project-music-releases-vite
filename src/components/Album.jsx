import { PropTypes } from 'prop-types';
import { AlbumName } from './AlbumName';
import { CoverImage } from './CoverImage';

export const Album = ({ album }) => {
  // TODO: remove this later on
  // console.log(album);

  const image = album.images.find(image => image.height === 640);

  return (
    <div className="album-container">
      <CoverImage img={image.url} alt={album.name} />
      {<AlbumName albumName={album.name} uri={album.uri} />}
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
