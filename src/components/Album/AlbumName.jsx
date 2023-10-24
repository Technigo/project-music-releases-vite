const AlbumName = ({ name, url }) => {
  return (
    <div className="albumName">
      <h2>
        {/* <span>Album: </span> */}
        <a href={url} target="_blank">
          {name}{" "}
        </a>
      </h2>
    </div>
  );
};

export default AlbumName;
