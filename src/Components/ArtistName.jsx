
export const ArtistName = ({ artists }) => {

return (
  <div>
    {artists && artists.length > 0 ? (
      artists.map((artist) => (
        <a key={artist.id} className="artist" href={artist.external_urls?.spotify}>
          <h3>By: {artist.name}</h3>
        </a>
      ))
    ) : (
      <p>No artists listed for this album.</p>
    )}
  </div>
);
}


//ArtistName component rendered using 'map()' that passes the artists array
