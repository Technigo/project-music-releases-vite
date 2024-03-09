// Here we create the cover image component.
import dots from "./assets/icons/dots.svg";
export const CoverImage = (props) => {
  return (
    <div className="coverImage">
      {/* [0] This means first image. alt text for screen readers is set to an empty string otherwise it will repeat "album, album " */}
      <img src={props.album.images[0].url} alt="" />
      <div className="overlay">
        <button>
          <img src={dots} alt="Your SVG" />
        </button>
        <button>Play</button>
        <button>Play</button>
      </div>
    </div>
  );
};
