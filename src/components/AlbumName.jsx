export const AlbumName = ({ albumInfo }) => {
  let albumInfoObj = {
    type: albumInfo.album_type,
    title: albumInfo.name,
    url: albumInfo.external_urls.spotify,
    target: "_blank", //open url i new window
    rel: "noreferrer noopener", //required
    class: "albumTitle"
  }

  return (
    <div className={albumInfoObj.class}>
      <a
        href={albumInfoObj.url}
        target={albumInfoObj.target}
        rel={albumInfoObj.rel}>
        <h2>{albumInfoObj.title}</h2>
      </a>
      <div className="album-type">{albumInfoObj.type}</div>
    </div >
  )
}



