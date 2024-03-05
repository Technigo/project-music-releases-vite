import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumData }) => {
  return (
    <div className="album-container">
      <CoverImage
        imageUrl={albumData.images[0].url}
        externalUrl={albumData.external_urls.spotify}
      ></CoverImage>
      <AlbumName
        title={albumData.name}
        externalUrl={albumData.external_urls.spotify}
      ></AlbumName>
      <ArtistName artistList={albumData.artists}></ArtistName>
    </div>
  );
};
