/* eslint-disable react/prop-types */
import "./AlbumName.css";

export const AlbumName = ({ singleAlbumItem }) => {
  let singleItemObject = {
    albumName: singleAlbumItem.name, 
    aHref: singleAlbumItem.external_urls.spotify, //the url to the page that should open when clicking on the album name
    target: "_blank", // "_blank" makes the link open in a new tab
    rel: "noreferrer noopener", //"noreferrer noopener" is a security measure for links that open in new tabs.
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

