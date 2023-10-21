export const HoverOverlay = () => {
  return (
    <div className="overlay">
      <span className="icon-container">
        <img src="heart.svg" className="heart-icon" alt="heart"></img>
        <img src="play.svg" className="play-icon" alt="play"></img>
        <img src="dots.svg" className="dots-icon" alt="dots"></img>
      </span>
    </div>
  );
};

HoverOverlay.propTypes = {};
