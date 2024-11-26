import dotsIcon from "../assets/icons/dots.svg";

export const DotsButton = () => {
  return (
    <span>
      <button type="button" aria-label="link to artist" className="dots-button">
        <img src={dotsIcon} className="dots-icon" />
      </button>
    </span>
  )
}