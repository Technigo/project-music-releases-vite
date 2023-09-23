import "./AlbumName.css";

export const AlbumName = ({ albumName }) => {
  //console.log(albumName);
  const track = {
    album: albumName.name,
    href: albumName.external_urls.spotify,
    target: "_blank",
  };
  return (
    <div className="album-name">
      <a href={track.href} target={track.target}>
        <h2>{track.album}</h2>
      </a>
    </div>
  );
};
