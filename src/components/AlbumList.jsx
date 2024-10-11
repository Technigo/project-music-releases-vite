import PropTypes from 'prop-types';
import { Album }  from './Album';

export const AlbumList = ({ albums }) => {
  return (
    <div className="album-container">
      {albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};
