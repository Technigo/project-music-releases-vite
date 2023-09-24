import ".././css_Components/AlbumCover.css";
// import icons as well

export const AlbumCover = ({ albumCoverItem }) => {

  let albumCoverObject = {
    coverImgUrl: albumCoverItem.images[0].url,
    coverImageAltText: albumCoverItem.name,
  };

  return (
    <div className="albumCover">
      <img src={albumCoverObject.coverImgUrl} alt={`This is the cover image for the album ${albumCoverObject.coverImageAltText}`} />
      <span className="icon-wrapper">
        <button type="button" className="icon heartIcon">
          <img src="./heart.svg" alt="heart icon" />
        </button>
        <button type="button" className="icon playIcon">
          <img src="./play.svg" alt="play icon" />
        </button>
        <button type="button" className="icon dotsIcon">
          <img src="./dots.svg" alt="three dots icon" />
        </button>
      </span>
    </div>
  );
};
