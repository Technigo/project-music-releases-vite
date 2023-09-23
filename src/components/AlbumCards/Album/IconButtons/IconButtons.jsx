// Component for adding in buttons, bu making a component here I could easily add in the buttons on other components too.
export const IconButtons = () => {
  return (
    <div className="icon-container hidden">
          <img id="favorite-icon" src="./icons/heart.svg" alt="Favorite Icon" />
          <img id="play-icon" src="./icons/play.svg" alt="Play Icon" />
          <img id="more-info-icon" src="./icons/dots.svg" alt="More Info Icon" />
        </div>
  )
}
