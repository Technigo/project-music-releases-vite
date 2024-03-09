export const AlbumName = (props) => {
  return (
    <div className="album">
      {/* The a element: the props is the album, we are getting the album out of the object, to get to urls. */}
     
      <a href={props.album.external_urls.spotify}>
        {/* And this line is to make the link as the text of the album. */}
        {props.album.name}
      </a>
    </div>
  );
};
