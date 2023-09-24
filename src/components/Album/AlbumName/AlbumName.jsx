import "./AlbumName.css";

export const AlbumName = ({ albumName }) => {
  // console.log(albumName);
  const track = {
    album: albumName.name,
    href: albumName.external_urls.spotify,
    target: "_blank",
  };
  return (
    <div className="album-name">
      <h2>
        <a href={track.href} target={track.target}>
          {track.album}
        </a>
      </h2>
    </div>
  );
};
