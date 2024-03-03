export const AlbumName = (album) => {
  const spotifyUrl = album.album.external_urls.spotify;
  const albumName = album.album.name;

  return (
    <>
      <a href={spotifyUrl} className="album-title" target="_blank">
        {albumName}
      </a>
    </>
  );
};
