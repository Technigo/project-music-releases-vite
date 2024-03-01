
import Heart from '../assets/icons/heart.svg?react';
import Play from '../assets/icons/play.svg?react';
import Dots from '../assets/icons/dots.svg?react';

const CoverImage = ({ coverImage }) => {
    return (
        <div className="album-wrapper">
            <img src={coverImage} alt="Album cover image" className="album-cover" />
            <span className="icon-wrapper">
                <Heart className="icon heart-icon" />
                <Play className="icon play-icon" />
                <Dots className="icon dots-icon" />
            </span>
        </div>
    )
};

export default CoverImage;