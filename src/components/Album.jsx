import { ArtistName } from "./ArtistName/ArtistName";
import { AlbumName } from "./AlbumName/AlbumName";
import { CoverImage } from "./CoverImage/CoverImage";

export const Album = ({ albumInfo }) => {
  console.log(albumInfo);

  const artistNameParent = albumInfo.artists[0].name;
  const albumNameParent = albumInfo.name;
  const externalAlbumHref = albumInfo.external_urls.spotify;
  const imageRefParent = {
    urlLinkFromApi: albumInfo.images[0].url,
    altText: albumInfo.name,
  };

  return (
    <div>
      <a href={externalAlbumHref} target="_blank" rel="noopener noreferrer">
        <AlbumName albumNameProp={albumNameParent} />
        <ArtistName artistNameProp={artistNameParent} />
        <CoverImage imageRefProp={imageRefParent} />
      </a>
    </div>
  );
};
