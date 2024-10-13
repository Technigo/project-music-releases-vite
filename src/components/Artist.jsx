// Display the Artist(s) names, separating with '&' and/or ',' depending on the number of artists

export const Artist = ({ album }) => {
  return (
    <div className="artists">
      {album.artists.map((artist, index) => {
        let separator = '';
        if (album.artists.length === 2 && index === 0) {
          separator = ' & ';
        } else if (album.artists.length > 2) {
          if (index < album.artists.length - 2) {
            separator = ', ';
          } else if (index === album.artists.length - 2) {
            separator = ' & ';
          }
        }

        return (
          <span key={artist.id} className="artist-name">
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Listen to ${artist.name} on Spotify`}
            >
              {artist.name}
            </a>
            {index < album.artists.length - 1 && (
              <span className="separator" aria-hidden="true">{separator}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};


