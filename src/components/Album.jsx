import { Buttons } from "./Buttons/Buttons";
import { ArtistName } from "./ArtistName/ArtistName";
import { AlbumName } from "./AlbumName/AlbumName";
import { CoverImage } from "./CoverImage/CoverImage";

export const Album = ({ albumInfo }) => {
  console.log(albumInfo);

  const buttonIconParent = "";
  const artistNameParent = albumInfo.artists[0].name;
  const externalArtistHref = albumInfo.artists[0].external_urls.spotify;
  const albumNameParent = albumInfo.name;
  const externalAlbumHref = albumInfo.external_urls.spotify;
  const imageRefParent = {
    urlLinkFromApi: albumInfo.images[0].url,
    altText: albumInfo.name,
  };

  return (
    <div>
      <Buttons buttonIconProp={buttonIconParent} />
      <a href={externalAlbumHref} target="_blank" rel="noopener noreferrer">
        <CoverImage imageRefProp={imageRefParent} />
        <AlbumName albumNameProp={albumNameParent} />
      </a>
      <a href={externalArtistHref} target="_blank" rel="noopener noreferrer">
        <ArtistName artistNameProp={artistNameParent} />
      </a>
    </div>
  );
};
