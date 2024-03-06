export const Playlist = ({name, url, desc}) => {
  return (
    <div className="playlist">
      <h3>{name}</h3>
      <p className="desc">{desc}</p>
      <a href={url} className="btn">Listen now</a>
    </div>
    )
  };