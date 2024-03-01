// import Play from "src/assets/icons/play.svg";

export const CoverImage = ({coverImage}) => {
    return (
        <div className="album-wrapper">
            <img src={coverImage} className="album-cover" alt="album cover image"/>
            {/* <span className="icon-wrapper">
                <Play className="play-icon"/>
            </span> */}
        </div>
    )
}