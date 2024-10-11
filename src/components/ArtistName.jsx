export const ArtistName = (props) => {
  return (
    <div className="artist-name">
      {/* Find each artist and their index to know if we need to add "," between */}
      {props.albumcard.artists.map((artist, index) => (
        <span key={artist.id}>
          <a
            // Add link to artist
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Show artist name on link */}
            {artist.name}

            {/* Give multiple artists "," between */}
            {index < props.albumcard.artists.length - 1 ? ', ' : ''}
          </a>
        </span>
      ))}
    </div>
  );
};