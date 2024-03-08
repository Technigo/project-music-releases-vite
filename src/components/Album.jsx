import { AlbumName } from "./AlbumName";
import { ArtistsName } from "./ArtistsName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumName, artists, coverImage, albumUrl }) => {
  return (
    <div className="AlbumCard">
      <CoverImage coverImage={coverImage} />
      <AlbumName albumName={albumName} albumUrl={albumUrl} />
      <ArtistsName artists={artists} />
    </div>
  );
};
