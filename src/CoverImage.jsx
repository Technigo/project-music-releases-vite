// CoverImage

const CoverImage = ({ imageUrl, altText }) => {
    return (
        <div className="container">
            <img className="AlbumImage" src={imageUrl} alt={altText} />
            <div className="middle">
                <img src="https://img.icons8.com/ios/50/000000/like--v1.png" alt="like--v1" />
                <img src="https://img.icons8.com/ios/50/circled-play.png" alt="circled-play" />
                <img src="https://img.icons8.com/ios-glyphs/30/ellipsis.png" alt="ellipsis" />
            </div>
        </div>
    );
};

export default CoverImage;
