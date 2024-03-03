export const Playlist = ({name, url, desc}) => {
  return (
    <div className="playlist">
      <p>{name}</p>
      <p>{desc}</p>
      <a href={url} className="btn">Listen now</a>
    </div>
    )
  };