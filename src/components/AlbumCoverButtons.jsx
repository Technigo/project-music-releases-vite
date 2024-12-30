import Heart from "../assets/icons/heart.svg"
import Play from "../assets/icons/play.svg"
import Dots from "../assets/icons/dots.svg"

import "../index.css"

export const AlbumCoverButtons = () => {
  return (
    <div className="album-cover-buttons">
      <button>
        <img src={Heart} alt="Heart-button" />
      </button>
      <button>
        <img src={Play} alt="Play-button" />
      </button>
      <button>
        <img src={Dots} alt="Menu-button" />
      </button>
    </div>
  )
}