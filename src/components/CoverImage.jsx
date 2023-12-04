
import heartIcon from '../assets/icons/heart.svg';
import playIcon from '../assets/icons/play.svg';

export const CoverImage = ({ images, dotsIcon }) => {
    return (
        <div className="coverImageWrapper">
            <img id="albumCoverImage" src={images[1].url} alt="album cover image" />
            <span className="iconWrapper">
                <button type="button" className="heartIcon">
                    <img id="heartIcon" src={heartIcon} alt="heart icon"></img>
                </button>
                <button type="button" className="playIcon">
                    <img id="playIcon" src={playIcon} alt="play icon"></img>
                </button>
                <button type="button" className="dotsIcon">
                    <img id="dotsIcon" src={dotsIcon} alt="dots icon"></img>
                </button>
            </span>
        </div >

    )
}
