import { PlayButton } from "./PlayButton";
import { FavoriteButton } from "./FavoriteButton";
import { MenuButton } from "./MenuButton";

export const AlbumControls = ({ albumName, className }) => {
  return (
    <ul
      className={`album__controls ${className}`}
      aria-label={`Controls for album ${albumName}`}
    >
      <li>
        <FavoriteButton />
      </li>
      <li>
        <PlayButton />
      </li>
      <li>
        <MenuButton />
      </li>
    </ul>
  );
};
