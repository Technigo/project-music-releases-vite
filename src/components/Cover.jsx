import "./styling/cover.css"
import heart from "../assets/icons/heart.svg"
import play from "../assets/icons/play.svg"
import dots from "../assets/icons/dots.svg"

export const Cover = ({ coverInfo }) => {

    let coverInfoObj = {
        image: coverInfo.images[1].url,
        url: coverInfo.external_urls.spotify,
    }    
    return (
        <div className="cover-image-wrapper">
          <div className="cover-image-element">
            <img className="cover" src={coverInfoObj.image} alt="Cover" />
          </div>
          <div className="icon-wrapper">
            <img className="heart-icon" src={heart} alt="heart-icon" />
            <a href={coverInfoObj.url}><img className="play-icon" src={play} alt="play-icon" /></a>
            <img className="dots-icon" src={dots} alt="dots-icon" />
          </div>
    </div>
  )
}