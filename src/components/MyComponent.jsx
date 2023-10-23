

// import React from "react";
import musicReleasesSVG from "../assets/music-releases.svg";

function MyComponent() {
  return (
    <div>
      <h1>My React App</h1>
      {/* Use the imported SVG file */}
      <img
        className="svg-icon"
        src={musicReleasesSVG}
        alt="Music Releases"
        width="100"
        height="100"
      />
    </div>
  );
}

export default MyComponent;




