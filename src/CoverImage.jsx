export const CoverImage = ({ album }) => {
  return (
    <div>
      <img src={album.images[0].url} alt={album.name} />
      <>
        <img src="./assets/icons/heart.svg" alt="heart-icon" />
        <img src="./assets/icons/play.svg" alt="play-icon" />
        <img src="./assets/icons/dots.svg" alt="dots-icon" />
      </>
    </div>
  )
}
