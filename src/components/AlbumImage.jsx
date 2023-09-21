
export const AlbumImage = ({ image, name, link }) => {
    return (
        <div className="image-wrapper">
            <div className="album-cover">
                <img className="album-image" src={image.url} alt={'Cover art for albumn: ${name}'} />
                <div className="three-hover-buttons">
                    <img className="button-heart" src="src/assets/icons/heart.svg" alt="Heart button" />
                    <img className="button-play" src="src/assets/icons/play.svg" alt="Play button" />
                    <img className="button-dots" src="src/assets/icons/dots.svg" alt="Dots button" />
                </div>
            </div >
        </div >
    )
}
