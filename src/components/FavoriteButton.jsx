import FavoriteIcon from "../assets/icons/heart.svg?react";

export const FavoriteButton = () => {
  return (
    <button
      className="icon-button icon-button--favorite"
      aria-label="Mark as favorite"
    >
      <FavoriteIcon fill="currentColor" />
    </button>
  );
};
