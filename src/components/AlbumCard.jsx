/* eslint-disable react/prop-types */

// Import components and assets
import AlbumCover from "./AlbumCover";
import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import heartIcon from "../assets/icons/heart.svg";
import playIcon from "../assets/icons/play.svg";
import dotsIcon from "../assets/icons/dots.svg";

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <div className="album-image-container">
        <AlbumCover coverUrl={album.images[0].url} />
        <div className="overlay-icons">
          <button className="icon fav-icon">
            <img src={heartIcon} alt="Favorite" />
          </button>
          <button className="icon play-icon">
            <img src={playIcon} alt="Play" />
          </button>
          <button className="icon more-icon">
            <img src={dotsIcon} alt="More" />
          </button>
        </div>
      </div>
      <AlbumName name={album.name} url={album.external_urls.spotify} />
      <div className="artist-names">
        {album.artists.map((artist, index) => (
          <ArtistName
            key={artist.id}
            name={artist.name}
            url={artist.external_urls.spotify}
            isLast={index === album.artists.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

// Export the AlbumCard component
export default AlbumCard;
