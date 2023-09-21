import { AlbumName } from "./AlbumComp/AlbumName";
import { ArtistName } from "./AlbumComp/ArtistName";
import { CoverImage } from "./AlbumComp/CoverImage";

export const Album = ({ images, albumNames, artists }) => {
  return (
    <div>
      <CoverImage images={images} />
      <AlbumName albumNames={albumNames} />
      <ArtistName artists={artists} />
    </div>
  );
};
export default Album;
