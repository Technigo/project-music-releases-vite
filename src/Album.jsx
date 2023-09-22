import { AlbumName } from "./AlbumComp/AlbumName";
import { ArtistName } from "./AlbumComp/ArtistName";
import { CoverImage } from "./AlbumComp/CoverImage";

export const Album = ({ images, albums, artists }) => {
  return (
    <div>
      <CoverImage images={images} />
      <AlbumName albums={albums} />
      <ArtistName artists={artists} />
    </div>
  );
};
export default Album;
