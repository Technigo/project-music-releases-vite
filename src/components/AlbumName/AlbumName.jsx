import "./AlbumName.css";

export const AlbumName = ({ albumSingleName }) => {
  const albumSingle = {
    album: albumSingleName.name,
    href: albumSingleName.external_urls.spotify,
    target: "_blank",
  };
  return (
    <div className="album-name">
      <a href={albumSingle.href} target={albumSingle.target}>
        <h2>{albumSingle.album}</h2>
      </a>
    </div>
  );
};
