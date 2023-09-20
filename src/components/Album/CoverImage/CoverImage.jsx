//BEHÖVS DENNA?
//import PropTypes from 'prop-types'

const CoverImage = ({ coverImage }) => {
    return (
      <div className="cover-images">
        <img src={coverImage} className="album-cover" alt="Cover" />          
      </div>
    );
  };

//const CoverImage = ({ imagesArray }) => {
  //return (
    //<div className="cover-images">
        //{imagesArray.map((mappedOutImage, index) => (
            //<div className="cover-image" key={index}>
            //<img src={mappedOutImage.url} alt={`Cover ${index}`} />
            //</div>
        //))}
    //</div>
  //);
//};

//BEHÖVS DENNA?
//CoverImage.propTypes = {
  //  coverImage: PropTypes.string.isRequired
//};

export default CoverImage;