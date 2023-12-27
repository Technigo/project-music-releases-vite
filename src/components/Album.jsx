import { Artists } from "./Artists";
import { AlbumImage } from "./AlbumImage";

export const Album = ({ id, name, albumType, image, artists, link }) => {
  return (
    <div className="album-info">
      <a
        target="_blank"
        className="album-image"
        href={link}
        key={id}
        rel="noreferrer noopener"
      >
        {<AlbumImage image={image} />}
      </a>
      <p>
        <span>
          <a
            target="_blank"
            className="album-names"
            href={link}
            key={id}
            rel="noreferrer noopener"
          >
            <strong>{name}</strong>
          </a>
        </span>
      </p>
      <span>
        <Artists artists={artists} />
      </span>
      <p>
        <span className="single-or-album">{albumType}</span>
      </p>
    </div>
  );
};
Album.defaultProps = {
  name: "No name information available",
  albumType: "No albumn type available",
};
