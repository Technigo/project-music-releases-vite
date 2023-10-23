import { Icon } from "./Icon";

export const CoverImage = ({ image }) => {
  return (
    <>
      <div className="CoverImage">
        <img src={image} alt="Album Cover"></img>
        <div className="icons">
          <Icon
            src="/src/assets/icons/heart.svg"
            alt="Heart"
            className="Heart"
          />
          <Icon src="/src/assets/icons/play.svg" alt="Play" className="Play" />
          <Icon src="/src/assets/icons/dots.svg" alt="Dots" className="Dots" />
        </div>
      </div>
    </>
  );
};
