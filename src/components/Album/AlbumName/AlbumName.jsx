export const AlbumName = ({ albumName }) => {
  // console.log(albumName);
  const track = {
    album: albumName.name,
    href: albumName.external_urls.spotify,
    target: "_blank",
  };
  return (
    <div className="album-name">
      <h3 className="title-card">
        <a href={track.href} target={track.target}>
          {track.album}
        </a>
      </h3>
    </div>
  );
};
