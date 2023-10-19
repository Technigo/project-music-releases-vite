
export const CoverImage = ({ images, albumUrl }) => {
    
    const selectedImage = images.filter(
        ({height}) => height === 300
    )
    const selectedUrl = selectedImage[0].url
    //console.log(selectedImage);
    return (
        <div className="albumCover">
           <a href={albumUrl}><img src={selectedUrl} alt="Album cover" /></a>
        </div>
    );
};

CoverImage.defaultProps = {
    //images: ["No cover image"]
};

