import { PropTypes } from 'prop-types';

import { CoverImage } from '../CoverImage';
import { AlbumName } from '../AlbumName';
import { TracksInfo } from '../TracksInfo';

export const Playlist = ({ playlist }) => {
  return (
    <div className="playlist-container">
      <CoverImage img={playlist.images[0].url} name={playlist.name} />
      <div className="playlist-text">
        <AlbumName
          albumName={playlist.name}
          uri={playlist.external_urls.spotify}
        />
        <TracksInfo trackCount={`${playlist.tracks.total}`} />
      </div>
    </div>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.object.isRequired,
};
