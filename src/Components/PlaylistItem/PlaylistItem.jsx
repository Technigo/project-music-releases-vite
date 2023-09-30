import style from "./PlaylistItem.module.css";

export const PlaylistItem = (obj) => {
  const { images, external_urls, name } = obj.obj;

  return (
    <div className={style.item_wrapper}>
      <div className={style.image_wrapper}>
        <a href={external_urls.spotify}>
          <img src={images[0].url} />
        </a>
      </div>
      {/* <p className={style.description}>{description}</p> */}
      <p className={style.name}>{name}</p>
    </div>
  );
};
