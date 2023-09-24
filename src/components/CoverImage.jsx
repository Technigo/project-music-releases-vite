import "./Album.css";

export const CoverImage = ({ cover }) => {
    return (
    <div className="album-cover">
        <img src={cover[1].url} className="cover-image" alt="Album cover image" />
        <div className="icons">
                <img src="./public/heart.png" className="like" alt="like button" />
                <img src="./public/play.png" className="play" alt="play button" />
                <img src="./public/dots.png" className="dots" alt="more info" />
        </div>
    </div>
    )
}