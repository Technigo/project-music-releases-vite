// Importing necessary child components
import { Buttons } from "./Buttons/Buttons";
import { ArtistName } from "./ArtistName/ArtistName";
import { AlbumName } from "./AlbumName/AlbumName";
import { CoverImage } from "./CoverImage/CoverImage";

export const Album = ({ albumInfo }) => {
  console.log(albumInfo);

  // Variables for each component prop, extracting necessary information from the passed albumInfo
  const buttonIconParent = "";
  const externalArtistHref = albumInfo.artists[0].external_urls.spotify;
  const albumNameParent = albumInfo.name;
  const artistNameParent = albumInfo.artists
    .map((artist) => artist.name)
    .join(", ");
  const externalAlbumHref = albumInfo.external_urls.spotify;
  const imageRefParent = {
    urlLinkFromApi: albumInfo.images[0].url,
    altText: albumInfo.name,
  };

  // Return the JSX for the Album component
  return (
    <div>
      <div className="cover-image-wrapper">
        <a href={externalAlbumHref} target="_blank" rel="noopener noreferrer">
          <CoverImage imageRefProp={imageRefParent} />
        </a>
        <Buttons buttonIconProp={buttonIconParent} />
      </div>

      <a href={externalAlbumHref} target="_blank" rel="noopener noreferrer">
        <AlbumName albumNameProp={albumNameParent} />
      </a>

      <a href={externalArtistHref} target="_blank" rel="noopener noreferrer">
        <ArtistName artistNameProp={artistNameParent} />
      </a>
    </div>
  );
};
