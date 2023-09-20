export const ArtistName = (mappedOutItem) => {
  const { albumsArray } = mappedOutItem;

  return (
    <section className="artist-name">
      {albumsArray.map((mappedOutItem) => (
        <div className="artist" key={mappedOutItem.id}>
          <div className="artists">
            {mappedOutItem.artists.map((mappedOutArtist) => (
              <a
                href={mappedOutArtist.external_urls.spotify}
                target="_blank"
                className="artist-name"
                key={mappedOutArtist.id}
                rel="noreferrer"
              >
                <span>{mappedOutArtist.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};