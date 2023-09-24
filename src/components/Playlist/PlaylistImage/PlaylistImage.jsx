import "./PlaylistImage.css";

export const PlaylistImage = ({ playlistCover }) => {
  const playlistIndex = 0;
  const playlistImage = {
    src: playlistCover.images[playlistIndex].url,
    alt: playlistCover.name,
  };
  return (
    <div className="playlist-cover">
      <img src={playlistImage.src} alt={playlistImage.alt} />
    </div>
  );
};
