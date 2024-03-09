
export const ArtistName = ({ artists }) => {

return (
  <div>
   {
      artists.map(({ id, external_urls, name }) => (
        <a key={id} className="artist" href={external_urls.spotify}>
          <h3>{name}</h3>
        </a>
      ))}
  </div>
);
}

ArtistName.defaultProps = {
  name: "Artist name is missing",
}


//ArtistName component rendered using 'map()' that passes the artists array
