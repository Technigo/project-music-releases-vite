export const Playlist = ({img, name, url, desc}) => {
  return (
    <div className="playlist">
      <img src={img} alt="" />
      <div>
      <h3 className="title"><a href={url}>{name}</a></h3>
      <p className="desc">{desc}</p>
      </div>

    </div>
    )
  };