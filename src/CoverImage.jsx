// CoverImage

const CoverImage = ({ imageUrl, altText }) => {
    return (
        <div className="container">
            <img className="AlbumImage" src={imageUrl} alt={altText} />
            <div className="middle">
                <img src="./src/assets/icons/heartbtn.png" alt="Heart Symbol" />
                <img src="./src/assets/icons/playbtn.png" alt="Play Symbol" />
                <img src="./src/assets/icons/dotsbtn.png" alt="Dots Symbol" />
            </div>
        </div>
    );
};

export default CoverImage;
