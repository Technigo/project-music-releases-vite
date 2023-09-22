export const ArtistName = (mappedOutItem) => {
const { albumsArray } = mappedOutItem;

return (
    <section className="artist-name">
      {albumsArray.map((mappedOutItem) => (
        <div className="artist" key={mappedOutItem.id}>
          <div className="artists">
            {mappedOutItem.artists.map((mappedOutArtist) => (
              // For each artist, create a link to the artist's Spotify page with a unique key based on the artist's 'id'
              <a
                href={mappedOutArtist.external_urls.spotify}
                target="_blank" // Open the link in a new tab
                className="artist-name"
                key={mappedOutArtist.id}
                rel="noreferrer" // Security attribute to prevent sending referrer information
              >
                {/* Display the artist's name */}
                <span>{mappedOutArtist.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
