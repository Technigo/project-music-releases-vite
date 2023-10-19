export const SingleCoverImage = ({ images, albumUrl, album_type }) => {

    const selectedSingleCover = images.filter(({ height }) => height === 300);
        //console.log("Selected Single Cover:", selectedSingleCover);

    if (album_type === "single" && selectedSingleCover.length > 0) {
        const selectedUrl = selectedSingleCover[0].url;
            //console.log("Selected URL:", selectedSingleCover[0].url);


        return (
            <div className="singleAlbumCover">
                <a href={albumUrl}><img src={selectedUrl} alt="Album cover" /></a>
            </div>
        );

    } else {
        console.warn("No image with height 300 found for the single album.");
        return null;
    }

};

SingleCoverImage.defaultProps = {
    //images: ["No cover image"]
};