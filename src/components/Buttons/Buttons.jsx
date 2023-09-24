// import "./Buttons.css";

export const Buttons = ({ buttonIconProp }) => {
  return (
    <div className="icon-wrapper">
      {buttonIconProp}
      <button type="button" className="heart">
        <img src="/path/to/public/icons/heart.svg" alt="Favourite" />
      </button>
      <button type="button" className="play">
        <img src="/path/to/public/icons/play.svg" alt="Play" />
      </button>
      <button type="button" className="dots">
        <img src="/path/to/public/icons/dots.svg" alt="Ellipsis" />
      </button>
    </div>
  );
};
