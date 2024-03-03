import play from "../../assets/icons/play.svg";
import heart from "../../assets/icons/heart.svg";
import dots from "../../assets/icons/dots.svg";

export const CoverImage = (album) => {
  const albumName = album.album;
  // Image height 300
  const imgUrl = albumName.images[1].url;

  return (
    <div className="coverImage">
      <img className="play-icon play" src={play} alt="" />
      <img className="play-icon heart" src={heart} alt="" />
      <img className="play-icon dots" src={dots} alt="" />
      <img src={imgUrl} alt={albumName.name} />
    </div>
  );
};
