
export const AlbumImage = ({ image }) => {
    return (
        <div className="image-wrapper">
            <div className="album-cover">
                <img className="album-image" src={image.url} alt={'Cover art for albumn: ${name}'} />
                <div className="three-hover-buttons">
                    <img className="button-heart" src="/assets/icons/heart.svg" alt="Heart button" />
                    <img className="button-play" src="/assets/icons/play.svg" alt="Play button" />
                    <img className="button-dots" src="/assets/icons/dots.svg" alt="Dots button" />
                </div>
            </div >
        </div >
    )
}
AlbumImage.defaultProps = {
    image: "Cover album image not available",
};