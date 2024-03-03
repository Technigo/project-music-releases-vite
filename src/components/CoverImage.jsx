import "./Album.css";

export const CoverImage = ({ cover }) => {
    return (
    <div className="album-cover">
        <img src={cover[1].url} className="cover-image" alt="Album cover image" />
        <div className="icons">
                <img src="/heart.png" className="like" alt="like button" />
                <img src="/play.png" className="play" alt="play button" />
                <img src="/dots.png" className="dots" alt="more info" />
        </div>
    </div>
    )
}