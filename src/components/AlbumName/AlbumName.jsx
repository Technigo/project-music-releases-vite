import "./albumname.css";

export const AlbumName = ({ singleAlbumItem }) => {
  //destruct the singleAlbumItem object to extract the 'name' and 'external_urls'
  const { name, external_urls } = singleAlbumItem;
  //extract the Spotify URL from the external_urls object.
  const { spotify } = external_urls;

  //display the album name  
  return (
    <div className="album-name">
      <a href={spotify} target="_blank" rel="noreferrer noopener">
        <h2>{name}</h2>
      </a>
    </div>
  );
};

