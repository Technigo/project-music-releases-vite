import ".././css_Components/AlbumName.css"


// Album name component
export const AlbumName = ({ albumNameItem }) => {

  let albumNameObject = {
    singleAlbumName: albumNameItem.name,
    aHref: albumNameItem.external_urls.spotify,
  };

  return (
    <div className="albumNameWrapper">
      <a href={albumNameObject.aHref} target="_blank" rel="noopener noreferrer">
        <h2>
          {albumNameObject.singleAlbumName}
        </h2>
      </a>
    </div>
  )
};
