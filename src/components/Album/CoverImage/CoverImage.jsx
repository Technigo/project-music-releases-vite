import "./CoverImage.css";

// This component takes a prop named 'coverImage', which is expected to be a URL to the album cover image. It uses destructuring to directly extract the 'coverImage' prop from the props object. It will render an 'img' element displaying the album cover image.
export const CoverImage = ({ coverImage }) => {
    return (
      <div className="cover-images">
        <img src={coverImage} className="album-cover" alt="Cover" />          
      </div>
    );
  };

//export default CoverImage