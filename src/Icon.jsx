import PropTypes from 'prop-types';
import './index.css';

function Icon(props) {
  const { iconSrc, altText } = props;

  return (
    <img src={iconSrc} alt={altText} className="custom-button" />
  );
}

Icon.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Icon;