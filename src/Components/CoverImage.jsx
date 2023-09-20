/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */


export const CoverImage = ({images}) => {
  return (
    <div>
        <div className="cover-img">
            <img src={images} alt="cover-image" />
            <div className="icon-wrapper">
                <button className="like-icon"><i className="fa-sharp fa-regular fa-heart" style={{color: "#ffffff"}}></i></button>
                <button className="play-icon"><i className="fa-regular fa-circle-play" style={{color: "#ffffff"}}></i></button>
                <button className="dott-icon"><i className="fa-solid fa-ellipsis" style={{color: "#ffffff"}}></i></button>

            </div>
        </div>
    </div>
  )
}
