import PropTypes from 'prop-types';
import Heart from "../assets/heart.png"
import Dots from "../assets/dots.png"
import Play from "../assets/play.png"


export const CoverImage = ({ images }) => {
   

    return (
        <div className="coverimagewrapper">
            <img className="img" src={images} alt="coverimage"/>
           <span className="iconContainer">
            <button type="button" className="icon heart">
                <img src={Heart} alt="heart" className='heart'/>
            </button>
            <button type="button" className="icon play">
                <img src={Play} alt="play" className='play'/>
            </button>
            <button type="button" className="icon more">
                <img src={Dots} alt="dots" className='dots' />
            </button>
            </span> 
        </div>
    );
};

CoverImage.propTypes = {images: PropTypes.string.isRequired};