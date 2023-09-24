export const Buttons = () => {

  //Returns a div called iconWrapper which contains three images as symbols for icons. A heart, a play-icon and three dots
  return (
    <>
      <div className="iconWrapper">
          <img id="favorite-icon" src="/icons/heart.svg" alt="Favorite Icon" />
          <img id="play-icon" src="/icons/play.svg" alt="Play Icon" />
          <img id="more-info-icon" src="/icons/dots.svg" alt="More Info Icon" />
      </div>
  </>
  )
}