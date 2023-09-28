import "./Buttons.css";

export const Buttons = ({ buttonIconProp }) => {
  return (
    <span className="icon-wrapper">
      {buttonIconProp}

      <button type="button" className="heart">
        <img src="/icons/heart.svg" alt="Favourite" />
      </button>

      <button type="button" className="play">
        <img src="/icons/play.svg" alt="Play" />
      </button>

      <button type="button" className="dots">
        <img src="/icons/dots.svg" alt="Ellipsis" />
      </button>
    </span>
  );
};
