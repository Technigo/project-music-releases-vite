export const AlbumsCoverImage = ({ images, albumUrl, album_type }) => {

    const selectedAlbumCover = images.filter(({ height }) => height === 300);
        //console.log("Selected Single Cover:", selectedSingleCover);

    if (album_type === "album" && selectedAlbumCover.length > 0) {
        const selectedUrl = selectedAlbumCover[0].url;
            //console.log("Selected URL:", selectedSingleCover[0].url);


        return (
            <div className="albumsCover">
                <a href={albumUrl}><img src={selectedUrl} alt="Album cover" /></a>
            </div>
        );

    } else {
        console.warn("No image with height 300 found for the single album.");
        return null;
    }

};

AlbumsCoverImage.defaultProps = {
    //images: ["No cover image"]
};