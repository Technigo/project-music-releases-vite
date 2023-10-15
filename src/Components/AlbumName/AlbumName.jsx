import "./AlbumName.css";

export const AlbumName = ({ singleAlbumItem }) => {
  let singleItemObject = {
    albumName: singleAlbumItem.name, 
    aHref: singleAlbumItem.external_urls.spotify, 
    target: "_blank", 
    rel: "noreferrer noopener", 
  }

  return (
    <div className="album-name">

      <a
      href={singleItemObject.aHref}
      target={singleItemObject.target}
      rel={singleItemObject.rel}>
        <h2>
          {singleItemObject.albumName}
        </h2>
      </a>

    </div>
  )
}