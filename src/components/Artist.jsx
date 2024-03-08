export const Artist = ({ artistInfo }) => {
  let artistInfoObj = {
    name: artistInfo.artists[0].name,
    url: artistInfo.artists[0].external_urls.spotify,
    target: "_blank", //open url i new window
    rel: "noreferrer noopener", //required
    class: "artistTitle"
  }

  // Take note of us using artistInfo for getting the data for Artist - who we use to add all info for album in an album object, and then pass the properties to elements as div, a, h2 etc
  console.log("artistinfo", artistInfo)
  console.log("artistinfo", artistInfo.name)

  return (
    <div className={artistInfoObj.class}>
      <a
        href={artistInfoObj.url}
        target={artistInfoObj.target}
        rel={artistInfoObj.rel}
      >
        <h1>{artistInfoObj.name}</h1>
      </a>
    </div>
  )

}

