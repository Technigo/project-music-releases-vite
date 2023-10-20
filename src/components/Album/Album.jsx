import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
import "./Album.css";

const getArtistContents = (artists) => {
  const artistContents = artists.map((artist) => (
    <ArtistName key={artist.name} name={artist.name} url={artist.url} />
  ));

  const last = artistContents.pop();

  if (last === undefined) {
    return <></>;
  }

  if (artistContents.length === 0) {
    return last;
  }

  artistContents.push(<p key="and">&</p>);
  artistContents.push(last);

  return artistContents;
};

const Album = ({ album }) => {
  return (
    <div className="album">
      <CoverImage url={album.imageUrl} albumName={album.name} />
      <AlbumName name={album.name} url={album.url} />
      <section className="artistWrapper">
        <p>Artist: </p>
        {getArtistContents(album.artists)}
      </section>
    </div>
  );
};

export default Album;
