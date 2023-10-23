export const PlaylistName = ({ playlistName }) => {
  console.log(`NAME`, playlistName);

  const playlistTitle = {
    name: playlistName.name,
    href: playlistName.external_urls.spotify,
    target: "_blank",
  };

  return (
    <div className="title">
      <h3 className="title-card">
        <a href={playlistTitle.href} target={playlistTitle.target}>
          {playlistTitle.name}
        </a>
      </h3>
    </div>
  );
};
