//– Handles the album cover image and hover effects (dark overlay, play button, heart, ellipsis).
import playIcon from "../assets/icons/play.svg";
import favoriteIcon from "../assets/icons/heart.svg";
import optionsIcon from "../assets/icons/dots.svg";

// The AlbumCover component is responsible for rendering the album's cover image.
// It receives the album prop and retrieves the image URL from the album's `images` array.
export const AlbumCover = ({ album }) => {
  // const imageUrl = album.images[1].url;

  // Access the second image in the images array. If there are fewer images, use a fallback.
  const imageUrl =
    album.images.length > 1 ? album.images[1].url : "default-image-url.jpg";

  // Render the album cover image with an alt attribute for accessibility
  return (
    <div className="album-cover">
      <img src={imageUrl} alt={`${album.name} cover`} />
      <div className="album-overlay">
        <button>
          <img src={favoriteIcon} alt="Favorite" className="icon" />
        </button>
        <button>
          <img src={playIcon} alt="Play" className="icon play" />
        </button>
        <button>
          <img src={optionsIcon} alt="More options" className="icon" />
        </button>
      </div>
    </div>
  );
};
