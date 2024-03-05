import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumData }) => {
  return (
    <div>
      <CoverImage imageUrl={albumData.images[0].url}></CoverImage>
      <AlbumName title={albumData.name}></AlbumName>
      <ArtistName artistList={albumData.artists}></ArtistName>
    </div>
  );
};
