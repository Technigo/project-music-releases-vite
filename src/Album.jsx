import { AlbumName } from "./AlbumComp/AlbumName";
import { ArtistName } from "./AlbumComp/ArtistName";
import { CoverImage } from "./AlbumComp/CoverImage";

export const Album = ({ coverImages, albumNames, artistNames }) => {
  return (
    <div>
      <CoverImage coverImages={coverImages} />
      <AlbumName albumNames={albumNames} />
      <ArtistName artistNames={artistNames} />
    </div>
  );
};
export default Album;
