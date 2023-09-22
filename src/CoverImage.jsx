import PropTypes from 'prop-types';
import './index.css';

function CoverImage(props) {
  const { coverImage } = props;
  const imageStyle = {
    width: '100',
  };

  return (
    <div className="cover-image">
      <img src={coverImage} alt="Album Cover" />
    </div>
  );
}

CoverImage.propTypes = {
  coverImage: PropTypes.string.isRequired,
};

export default CoverImage;