// Here we create the cover image component.
// Here we import the svg for the buttons on the cover image.
import dots from "./assets/icons/dots.svg";
import play from "./assets/icons/play.svg";
import heart from "./assets/icons/heart.svg";
export const CoverImage = (props) => {
  return (
    <div className="coverImage">
      {/* [0] This means first image. alt text for screen readers is set to an empty string otherwise it will repeat "album, album " */}
      <img src={props.album.images[0].url} alt="" />
      <div className="overlay">
        <button>
          <img src={heart} alt="like" />
        </button>

        <button>
          <img src={play} alt="play" />
        </button>

        <button>
          <img src={dots} alt="menu" />
        </button>
      </div>
    </div>
  );
};
