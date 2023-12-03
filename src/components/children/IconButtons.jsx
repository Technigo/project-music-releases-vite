import HeartIcon from '../../assets/icons/heart.svg';
import CirclePlayIcon from '../../assets/icons/play.svg';
import DotsIcon from '../../assets/icons/dots.svg';
import styled from 'styled-components';

const Buttons = styled.div`
/* Button container */
.icon-container {
  display: flex;
  justify-content: center;
  /* Center the icons with equal space between them */
  left: 0;
  opacity: 0;
  position: absolute;
  top: 40%;
  width: 100%;
  transition: opacity 0.3s ease;
  gap: 30px;
  /* This gap will be used between icons */
}


/* Show the icons when the wrapper is hovered */
.cover-image-wrapper:hover .icon-container {
  opacity: 1;
}

/* Button styling */
.icon-button {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  width: 35px;
}

/* Icon styling */
.icon {
  transition: transform 0.3s ease;
  filter: invert(1);
}

/* Increase the size of the icon on hover */
.icon:hover {
  transform: scale(1.3);
}

/* Increase the size of the heart and dots icons without affecting the gap */
.icon-container .heart-icon img,
.icon-container .dots-icon img {
  width: 35px;
  /* Adjust the width as needed */
  height: 35px;
  /* Adjust the height as needed */
  /* Set the initial opacity */
  opacity: 0.6;
  margin: 0;

  &:hover {
    opacity: 1;
  }
}

/* Icon styling for play icon (if needed) */
.icon-container .play-icon img {
  width: 45px;
  height: 45px;
  /* Set the initial opacity */
  opacity: 0.6;
  margin: 0px;

  &:hover {
    opacity: 1;
  }
}
`;

export const IconButtons = () => {
    return (
        <Buttons>
            {/* Button container */}
            <span className="icon-container">
                {/* Heart button */}
                <button type="button" className="icon-button heart-icon">
                    <img src={HeartIcon} alt="Heart Icon" className="icon heart" />
                </button>
                {/* Play button */}
                <button type="button" className="icon-button play-icon">
                    <img src={CirclePlayIcon} alt="Circle Play Icon" className="icon play" />
                </button>
                {/* Dots button */}
                <button type="button" className="icon-button dots-icon">
                    <img src={DotsIcon} alt="Dots Icon" className="icon dots" />
                </button>
            </span>
        </Buttons>
    );
};
