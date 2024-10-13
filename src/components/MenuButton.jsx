import MenuIcon from "../assets/icons/dots.svg?react";

export const MenuButton = () => {
  return (
    <button
      className="icon-button icon-button--menu"
      aria-expanded="false"
      aria-label="Open menu for more options"
    >
      <MenuIcon fill="currentColor" />
    </button>
  );
};
