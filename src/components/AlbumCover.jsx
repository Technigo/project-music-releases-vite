// Import button icons
import Heart from "../assets/icons/heart.svg";
import Play from "../assets/icons/play.svg";
import Dots from "../assets/icons/dots.svg";

// Export album cover, picture and buttons
export const AlbumCover = (props) => {
  return (
    <div className="album-cover-container">
      <figure className="album-cover">
        {/* The first picture and it's url */}
        <img src={props.albumcard.images[0].url} alt={props.albumcard.name} />
      </figure>

      {/* Icons as buttons */}
      <div className="album-cover-buttons">
        <button>
          <img src={Heart} alt="Like button" />
        </button>

        <button>
          <img src={Play} alt="Play button" />
        </button>

        <button>
          <img src={Dots} alt="Meny button" />
        </button>
      </div>
    </div>
  );
};
