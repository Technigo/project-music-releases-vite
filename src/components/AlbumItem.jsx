import { useState } from "react";
import { AlbumControls } from "./AlbumControls";
import { ArtistItem } from "./ArtistItem";

export const AlbumItem = ({
  image,
  albumName,
  albumType,
  albumUrl,
  artists,
}) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  // Combined state to determine when AlbumControls should be shown
  const showControls = hovered || focused;

  const placeholderImage = "./placeholder-image.jpg"; // Path to your placeholder image

  return (
    <article
      className="album__item"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="album__cover">
        <img
          className="album__image"
          width="250"
          height="250"
          src={image || placeholderImage}
          alt=""
        />
        <AlbumControls
          albumName={albumName}
          className={showControls ? "is-visible" : ""}
        />
      </div>
      <div className="album__info">
        <h3 className="album__name">
          <a
            href={albumUrl || "#"}
            className="album__link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only">{albumType || "Album"} name:</span>{" "}
            {albumName || "Unknown album"}
          </a>
        </h3>
        <p className="album__artists">
          {artists && artists.length > 0 ? (
            artists.map((artist, index) => (
              <ArtistItem
                key={artist.id}
                name={artist.name}
                type={artist.type}
                url={artist.external_urls.spotify}
                isNextToLast={index === artists.length - 2}
                isLast={index === artists.length - 1}
              />
            ))
          ) : (
            <span>Unknown artists</span>
          )}
        </p>
      </div>
    </article>
  );
};
