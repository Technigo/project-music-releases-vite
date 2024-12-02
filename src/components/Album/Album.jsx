import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
import "./Album.css";

const getArtistContents = (artists) => {
  const artistArray = [...artists];
  const last = artistArray.pop();

  if (last === undefined) {
    return <></>;
  }

  const lastContent = (
    <ArtistName key={last.id} name={last.name} url={last.url} />
  );

  if (artistArray.length === 0) {
    return lastContent;
  }

  const artistContents = [];
  for (let index = 0; index < artistArray.length; index++) {
    const artist = artistArray[index];
    let artistName = artist.name;

    if (index !== artistArray.length - 1) {
      artistName = artist.name + ",";
    }

    artistContents.push(
      <ArtistName key={artist.id} name={artistName} url={artist.url} />
    );
  }

  artistContents.push(<p key="and">&</p>);
  artistContents.push(lastContent);

  return artistContents;
};

const Album = ({ album }) => {
  return (
    <div className="album">
      <CoverImage url={album.imageUrl} albumName={album.name} />
      <AlbumName name={album.name} url={album.url} />
      <section className="artistWrapper">
        {/* <p>Artist: </p> */}
        {getArtistContents(album.artists)}
      </section>
    </div>
  );
};

export default Album;
