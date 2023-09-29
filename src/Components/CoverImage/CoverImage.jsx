import { useState } from "react";
import style from "./CoverImage.module.css";
export const CoverImagage = (url) => {
  const imageUrl = url.url[0].url;

  const [isShown, setIsShown] = useState(false);

  return (
    <div className={style.image_container}>
      <img className={`${style.coverImage} ${isShown ? style.dark : ""}`} src={imageUrl} />
      <div
        className={style.icon_wrapper}
        onMouseOver={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          className={`${style.icon_like}  ${isShown ? style.visible : ""}`}
          src="/assets/icons/like.png"
        />
        <img
          className={`${style.icon_play}  ${isShown ? style.visible : ""}`}
          src="/assets/icons/play.png"
        />
        <img
          className={`${style.icon_more}  ${isShown ? style.visible : ""}`}
          src="/assets/icons/more.png"
        />
      </div>
    </div>
  );
};
