export const ArtistName = (artists) => {
  // Add default value if the artisname doesn´t exist
  const artistName =
    artists.artists && artists.artists.length > 0
      ? artists.artists[0].name
      : "Unknown Artist";
  return <p className="artist-name">{artistName}</p>;
};
