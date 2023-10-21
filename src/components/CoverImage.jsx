export const CoverImage = (props) => {
    return (
      <div className="overlay">
        <div className="icon-container">
          <img src="./icons/heart.svg" className="heart icon" alt="heart"></img>
          <img src="./icons/play.svg" className="play icon" alt="play"></img>
          <img src="./icons/dots.svg" className="dots icon" alt="dots"></img>
        </div>
      <img src={props.img} className="album-image" alt="album cover" />
   </div>
  )
}