export const ArtistName = (artists) => {
  const artistInfo = artists.artists;

  return (
    <>
      {artistInfo && (
        <div>
          <p className="artist-name">
            {artistInfo.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      )}
    </>
  );
};
