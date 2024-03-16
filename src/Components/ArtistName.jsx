export const ArtistName = ({ name, spotifyUrl, id }) => {
  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="artist-name"
    >
      {name}
    </a>
  );
};
