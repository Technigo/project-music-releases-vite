// Importing necessary child components
import { Buttons } from "./Buttons/Buttons";
import { ArtistName } from "./ArtistName/ArtistName";
import { AlbumName } from "./AlbumName/AlbumName";
import { CoverImage } from "./CoverImage/CoverImage";

export const Album = ({ albumInfo }) => {
  console.log(albumInfo);

  // Variables for each component prop, extracting necessary information from the passed albumInfo
  const buttonIconParent = "";
  const albumNameParent = albumInfo.name;
  const externalAlbumHref = albumInfo.external_urls.spotify;
  const imageRefParent = {
    urlLinkFromApi: albumInfo.images[0].url,
    altText: albumInfo.name,
  };

  const formatArtistLinks = (artists) => {
    return artists.map((artist, index) => {
      const isLastArtist = index === artists.length - 1;
      const isSecondLastArtist = index === artists.length - 2;
      return (
        <span key={artist.id} className="artist-link">
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer">
            <ArtistName artistNameProp={artist.name} />
          </a>
          {isLastArtist ? "" : isSecondLastArtist ? " & " : ", "}
        </span>
      );
    });
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

      <div className="artists">{formatArtistLinks(albumInfo.artists)}</div>
    </div>
  );
};
