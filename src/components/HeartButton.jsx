import heartIcon from "../assets/icons/heart.svg";

export const HeartButton = () => {
  return (
    <span className="heart-button-container">
      <button type="button" aria-label="like" className="heart-button">
        <img src={heartIcon} className="heart-icon" />
      </button>
    </span>
  )
}