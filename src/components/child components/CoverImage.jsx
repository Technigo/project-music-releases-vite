
export const CoverImage = ({ images }) => {
    return (
        <div className="albumCover">
            <span>Cover Image:</span>
            {images.map((img, key) => {
                <ul key={key}>
                    {" "}
                    <li key={img}>{img}</li>
                </ul>
            })}
        </div>
    );
};

CoverImage.defaultProps = {
    images: "No cover image",
};

//images[1].ulr.map