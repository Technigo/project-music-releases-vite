import PropTypes from 'prop-types';

function CoverImage(props) {
  const { coverImage } = props;

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
