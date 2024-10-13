import PlayIcon from "../assets/icons/play.svg?react";

export const PlayButton = () => {
  return (
    <button
      className="icon-button icon-button--large icon-button--play"
      aria-label="Start playing"
    >
      <PlayIcon fill="currentColor" />
    </button>
  );
};
