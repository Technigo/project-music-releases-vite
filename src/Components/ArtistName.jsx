
export const ArtistName = ({ artists }) => {
 // Check if artists is provided and is an array
 if (!artists || !Array.isArray(artists)) {
  return <div>No artists found</div>;
}

  return (
    <div>
     {artists.map(({ external_urls, id, name }) => (
      <a key={id} className="artist" href={external_urls.spotify}>
          <h3>By: {name}</h3>
      </a>
     ))}
     </div>
  );
};

ArtistName.defaultProps = {
  albumName :"Name is missing",

}
/*
export const ArtistName = ({ artists }) => {
  return (
    <div>
       {artists.map(({ external_urls, id, name }) => (
        <a key={id} className="artist" href={external_urls.spotify}>
            <h3>{name}</h3>
        </a>
       ))}
        </div>
  )
}

 */