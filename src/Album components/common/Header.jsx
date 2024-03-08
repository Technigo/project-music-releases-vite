import imgUrl from "../../assets/releases-black.svg"
import "./Header.css"

export const Header = () => {
  let headerImage = {
    imgUrl: imgUrl,
    imgAlt: "header of music releases",
  }
  return (<header>
    <img src={headerImage.imgUrl} alt={headerImage.imgAlt} />
  </header>
  )
}
