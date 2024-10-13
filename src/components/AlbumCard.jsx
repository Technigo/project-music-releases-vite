import { AlbumImage } from './AlbumImage';
import { AlbumTitle } from './AlbumTitle';
import { Artist } from './Artist';

export const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">

      <AlbumImage album={album} />

      <AlbumTitle album={album} />

      <Artist album={album} />

    </div>
  );
};

export default AlbumCard;