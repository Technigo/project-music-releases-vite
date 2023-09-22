import { AlbumName } from "./AlbumComp/AlbumName";
import { ArtistName } from "./AlbumComp/ArtistName";
import { CoverImage } from "./AlbumComp/CoverImage";

export const Album = ({ images, albums, artists, albumUrl, artistUrl }) => {
  return (
    <div>
      <CoverImage images={images} />
      <div className="content">
        <AlbumName albums={albums} albumUrl={albumUrl} />
        <ArtistName artists={artists} artistUrl={artistUrl} />
      </div>
    </div>
  );
};
export default Album;
