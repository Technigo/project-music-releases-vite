import style from "./PlayIcon.module.css";

export const PlayIcon = () => {
  return (
    <div className={style.playIcon}>
      {/* Use an img tag to display the Play icon */}
      <img
        src="src/assets/icons/play.svg"
        alt="Play Icon"
        className={style.iconImage}
      />
    </div>
  );
};