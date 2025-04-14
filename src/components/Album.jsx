//– Represents each album, displaying the cover image, album name, and artist names.
import { AlbumCover } from "./AlbumCover";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";

// The Album component represents an individual album.
// It receives the entire album object as a prop and uses it to render various parts of the album's details.
export const Album = ({ album }) => {
  return (
    <li>
      <div>
        {/* Passing the album prop to the AlbumCover, AlbumName, and ArtistName components */}
        <AlbumCover album={album} />
        <AlbumName album={album} />
        <ArtistName album={album} />
      </div>
    </li>
  );
};
