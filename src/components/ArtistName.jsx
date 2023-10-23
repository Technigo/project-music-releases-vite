export const ArtistName = ({ artists, external_urls }) => {
  const onAlbumClicked = () => {
    window.open(external_urls, "_blank");
  };

  return (
    <div onClick={onAlbumClicked} className="Artist">
      <p>
        {artists.map((artist, index) => (
          <text key={artist.id}>
            {artist.name}
            {artists[index + 1] && !artists[index + 2] ? " & " : ""}
            {artists[index + 2] ? ", " : ""}
          </text>
        ))}
      </p>
    </div>
  );
};
