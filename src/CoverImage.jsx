// CoverImage

const CoverImage = ({ imageUrl, altText }) => {
    return (
        <div className="container">
            <img className="AlbumImage" src={imageUrl} alt={altText} />
            <div className="middle">
                <img src="./src/assets/icons/heartbtn.png" alt="" />
                <img src="./src/assets/icons/playbtn.png" alt="" />
                <img src="./src/assets/icons/dotsbtn.png" alt="" />
            </div>
        </div>
    );
};

export default CoverImage;
