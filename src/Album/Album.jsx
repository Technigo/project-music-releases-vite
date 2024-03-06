import { AlbumName } from "./AlbumName.jsx"
import { ArtistName } from "./ArtistName.jsx"
import { CoverImage } from "./CoverImage.jsx"

export const Album = ({
  name,
  artists,
  image,
}) => {
  return (
    <div className="album">
        <AlbumName name={name} />
        <ArtistName artists={artists} />
        <CoverImage image={image} />
    </div>
  );
};
