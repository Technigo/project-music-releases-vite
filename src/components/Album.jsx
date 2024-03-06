import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";
import { CoverImage } from "./CoverImage";

export const Album = ({ albumData }) => {
  const artistDatas = albumData.artists;
  return (
    <div>
      <CoverImage coverImage={albumData.images[1].url} />
      <AlbumName
        albumName={albumData.name}
        albumLink={albumData.external_urls.spotify}
      />
      {artistDatas.map((artist) => (
        <ArtistName
          key={artist.id}
          name={artist.name}
          external_url={artist.external_urls.spotify}
        />
      ))}
    </div>
  );
};

//key = {albumData.images} for images?
//it map() the items array, artist and images need to be map in Album component. key?