const Playlist = ({ name, images, link }) => {
  return (
    <div className="playlists-container">
      <img src={images} alt="playlist img" />
      <a href={link} target="blank">
        <h3>{name}</h3>
      </a>
    </div>
  );
};

export default Playlist;
