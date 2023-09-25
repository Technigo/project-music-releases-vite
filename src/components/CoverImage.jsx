import PropTypes from 'prop-types';


export const CoverImage = ({ images }) => {
    return (
        <div className="coverImage">
            <img className="img" src={images} alt="coverimage"/>
           <div className="iconContainer">
           <img className="icon heart" src="./assets/heart.svg" alt="heart" />
            <img className="icon play" src="./assets/play.svg" alt="play" />
            <img className="icon dots" src="./assets/dots.svg" alt="more" />
            
            </div> 
        </div>
    );
};

CoverImage.propTypes = {images: PropTypes.string.isRequired};