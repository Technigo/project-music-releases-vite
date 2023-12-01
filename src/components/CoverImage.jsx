//import { ReactComponent as DotsIcon } from '../assets/icons/dots.svg';

export const CoverImage = ({ images }) => {
    return (
        <div className="coverImageWrapper">
            <img id="albumCoverImage" src={images[1].url} alt="album cover image" />
            <span className="iconWrapper">
                <button type="button" className="heartIcon">
                    <img id="heartIcon" src="../assets/icons/heart.svg" alt="heart icon"></img>
                </button>
                <button type="button" className="playIcon">
                    <img id="playIcon" src="../assets/icons/play.svg" alt="play icon"></img>
                </button>
                <button type="button" className="dotsIcon">
                    <img id="dotsIcon" src="../assets/icons/dots.svg" alt="dots icon"></img>
                </button>
            </span>
        </div>

    )
}
