import "./CoverImage.css";

export const CoverImage = ({ coverImage }) => {
  return (
    <div className="cover-image">
      <img src={coverImage} className="album-cover" alt="Cover of Album" />
      <div className="icon-wrapper">
        <button type="button" className="icon-heart">
          <img src="/heart.svg" alt="Heart icon" className="icon-heart" />
        </button>
        <button type="button" className="icon-play">
          <img src="/play.svg" alt="Play icon" className="icon-play" />
        </button>
        <button type="button" className="icon-dots">
          <img src="/dots.svg" alt="Dots icon" className="icon-dots" />
        </button>
      </div>
    </div>
  );
};
