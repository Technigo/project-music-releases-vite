import PropTypes from 'prop-types';

// Define component Icon
function Icon(props) {
  // Destructure the 'iconSrc' and 'altText' props
  const { iconSrc, altText } = props;

   // Render an image and alt attribute
  return (
    <img src={iconSrc} alt={altText} className="custom-button" />
  );
}

// Define prop types for Icon
Icon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Icon;