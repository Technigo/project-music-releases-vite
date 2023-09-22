export const ArtistName = ({ artists, artistUrl }) => {
  return (
    <div className={`{artists} ${artists.length > 1 ? "artist-list" : ""}`}>
      {artists.map((artist) => (
        <p key={artist.id}>
          <a
            href={artistUrl}
            className="a-artist"
            target="_blank"
            rel="noreferrer"
          >
            {artist.name}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ArtistName;
